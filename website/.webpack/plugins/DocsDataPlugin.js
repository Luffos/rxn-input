const path = require('path');
const fs = require('fs');
const glob = require('glob');
var chokidar = require('chokidar');
const { v4: uuidv4 } = require('uuid');

const docsPath = './src/content/docs';

let pluginAlreadyLoaded = false;
let isProduction = String(process?.env?.NODE_ENV).toLowerCase() === 'production';
let lastBuildHash = '';

const buildData = () => {
  const buildHash = uuidv4();
  lastBuildHash = buildHash;

  const schema = JSON.parse(fs.readFileSync(`${docsPath}/schema.json`, { encoding: `utf-8` }))
  const data = {};

  Object.keys(schema).forEach(version => {
    data[version] = {};

    Object.keys(schema[version]).forEach(folder => {
      data[version][folder] = [];
    });

  })

  if (lastBuildHash !== buildHash) return;

  fs.writeFileSync(`${docsPath}/data.json`, JSON.stringify(data, 'utf-8'));
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
