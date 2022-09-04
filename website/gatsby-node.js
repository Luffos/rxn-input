const path = require('path');
const DocPageTemplate = path.resolve('./src/templates/DocPage.tsx')

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

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;

  const result = await graphql(`
    query MyQuery {
      allMdx {
        nodes {
          body
          id
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: `/docs/${node.internal.contentFilePath.split(`src/content/docs/`).pop().split(`.mdx`)[0]}`,
      component: `${DocPageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      }
    });
  });
};
