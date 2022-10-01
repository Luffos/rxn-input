const path = require('path')
const glob = require('glob')

const isProduction = String(process?.env?.NODE_ENV).toLowerCase() === 'production';

class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'MyPlugin',
      (compilation, callback) => {
        console.log('This is an example plugin!');

        callback();
      }
    );
  }
}

module.exports = MyPlugin;