exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-native$': 'react-native-web'
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.web.tsx', '.web.ts', '.web.jsx', '.web.js']
    }
  });
};
