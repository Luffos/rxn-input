const path = require('path');

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
      component: path.resolve('./src/templates/DocPage.tsx'),
      context: {
        id: node.id,
        body: node.body
      }
    });
  });
};
