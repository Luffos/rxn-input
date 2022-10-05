const path = require('path');
const fs = require('fs');
const glob = require('glob');
const chokidar = require('chokidar');
const { v4: uuidv4 } = require('uuid');
const matter = require('gray-matter');

const docsPath = './src/content/docs';

let pluginAlreadyLoaded = false;
let isProduction = String(process?.env?.NODE_ENV).toLowerCase() === 'production';
let lastBuildHash = '';

const handleDocFile = (data, version, folder, docFile) => {
  try {
    const transformedDocFile = docFile.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, '');

    const body = fs.readFileSync(docFile, 'utf-8');

    data[version][folder][transformedDocFile] = {
      body: body,
      frontmatter: matter(body).data,
    };
  } catch (error) {
    console.log(`error! ${version}/${folder}/${docFile}`, error);
  }
};

const buildData = () => {
  const buildHash = uuidv4();
  lastBuildHash = buildHash;

  const schema = JSON.parse(fs.readFileSync(`${docsPath}/schema.json`, { encoding: `utf-8` }));
  const data = {};

  Object.keys(schema).forEach((version) => {
    data[version] = {};

    Object.keys(schema[version]).forEach((folder) => {
      data[version][folder] = {};

      if (schema[version][folder] == `asc`) {
        return glob.sync(`${docsPath}/${version}/${folder}/*.mdx`).map((docFile) => handleDocFile(data, version, folder, docFile));
      }

      if (Array.isArray(schema[version][folder])) {
        schema[version][folder].map((docFile) => handleDocFile(data, version, folder, `${docsPath}/${version}/${folder}/${docFile}`));
      }
    });
  });

  console.log(data);

  if (lastBuildHash !== buildHash) return;

  fs.writeFileSync(`${docsPath}/data.json`, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`build data`);
};

class DocsDataPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('DocsDataPlugin', (compilation, callback) => {
      if (pluginAlreadyLoaded) return callback();
      pluginAlreadyLoaded = true;

      buildData();

      if (!isProduction) {
        chokidar.watch(`${docsPath}/schema.json`, { ignoreInitial: true }).on('all', (event, path, stats) => {
          buildData();
        });

        chokidar.watch(`${docsPath}/**/*.mdx`, { ignoreInitial: true }).on('all', (event, path, stats) => {
          buildData();
        });
      }

      callback();
    });
  }
}

module.exports = DocsDataPlugin;
