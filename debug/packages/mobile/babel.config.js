const path = require('path');
const pak = require('../../../package.json');

module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-typescript', {allowDeclareFields: true}],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          [pak.name]: path.join(__dirname, '../../..', pak.source),
          react: './node_modules/react',
          'react-native': './node_modules/react-native',
        },
      },
    ],
  ],
};
