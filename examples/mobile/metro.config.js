/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const extraNodeModules = {
  common: path.resolve(__dirname + '/../shared'),
};
const watchFolders = [path.resolve(__dirname + '/../shared')];

const nodeModulesPaths = [path.resolve(path.join(__dirname, './node_modules'))];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    nodeModulesPaths,
  },
  watchFolders,
};
