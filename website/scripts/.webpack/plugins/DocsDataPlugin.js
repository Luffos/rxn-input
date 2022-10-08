const path = require('path');
const fs = require('fs');
const glob = require('glob');
const chokidar = require('chokidar');
const { v4: uuidv4 } = require('uuid');
const matter = require('gray-matter');

const docsPath = './src/content/docs';
let docsSchema = JSON.parse(fs.readFileSync(`${docsPath}/schema.json`, { encoding: `utf-8` }));

let pluginAlreadyLoaded = false;
let isProduction = String(process?.env?.NODE_ENV).toLowerCase() === 'production';
let lastBuildHash = '';

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

  preBuild(){
    buildData()
  }
}

const handleDocFile = (data, version, folder, docPath, contextIndex) => {
  try {
    const docFileName = docPath.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, '');

    const body = fs.readFileSync(docPath, 'utf-8');

    data[version][folder][docFileName] = {
      slugs: generateSlugs(data, version, folder, docPath, docFileName, contextIndex),
      body: body,
      version: version,
      frontmatter: matter(body).data,
    };
  } catch (error) {
    console.log(`error! ${version}/${folder}/${docPath}`, error);
  }
};

const buildData = () => {
  const buildHash = uuidv4();
  lastBuildHash = buildHash;

  docsSchema = JSON.parse(fs.readFileSync(`${docsPath}/schema.json`, { encoding: `utf-8` }));
  const data = {};

  Object.keys(docsSchema).forEach((version) => {
    data[version] = {};

    Object.keys(docsSchema[version]).forEach((folder) => {
      data[version][folder] = {};

      if (docsSchema[version][folder] == `asc`) {
        return glob.sync(`${docsPath}/${version}/${folder}/*.mdx`).map((docFile, index) => handleDocFile(data, version, folder, docFile, index));
      }

      if (Array.isArray(docsSchema[version][folder])) {
        docsSchema[version][folder].map((docFile, index) => handleDocFile(data, version, folder, `${docsPath}/${version}/${folder}/${docFile}`, index));
      }
    });
  });

  if (lastBuildHash !== buildHash) return;

  fs.writeFileSync(`${docsPath}/data.json`, JSON.stringify(data, null, 2), 'utf-8');
};

const generateSlugs = (data, version, folder, docPath, docFileName, contextIndex) => {
  let slugs = [];

  // is last version, first folder and first doc 👇
  if (
    folder == Object.entries(Object.entries(docsSchema).slice(-1)[0].pop())[0][0] &&
    Object.entries(Object.entries(docsSchema).slice(-1)[0].pop())[0][1][0] == docFileName + '.mdx'
  ) {
    slugs.push('docs/');
  }

  // is last version ( dont't need /docs/VERSION/... ) 👇
  if (version == Object.keys(docsSchema).slice(-1)[0]) {
    //is first doc ( and last version) 👇
    if (contextIndex == 0) {
      slugs.push(`docs/${folder}`);
    }

    slugs.push(`docs/${folder}/${docFileName}`);
  }

  //is first doc 👇
  if (contextIndex == 0) {
    slugs.push(`docs/${version}/${folder}`);
  }
  
  // default
  slugs.push(`docs/${version}/${folder}/${docFileName}`);

  // transform
  slugs = slugs.map((element) => {
    return element.replace(/ /g, '-').toLowerCase();
  });

  return slugs;
};

module.exports = DocsDataPlugin;
