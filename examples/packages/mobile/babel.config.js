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
          react: './node_modules/react',
          'react-native': './node_modules/react-native',
        },
      },
    ],
  ],
};
