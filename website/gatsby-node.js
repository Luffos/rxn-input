const path = require('path');
const DocPageTemplate = path.resolve('./src/templates/DocPage.tsx');

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr);
    }

    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

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

function getDocVersion(fullPath) {
  return `${fullPath}`.split('docs/').pop().split('/')[0];
}

function isNextVersion(fullPath, sortedDocsVersions) {
  return sortedDocsVersions.slice(-1)[0] == getDocVersion(fullPath);
}

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;

  const result = await graphql(`
    query MyQuery {
      allMdx(sort: {order: ASC, fields: internal___contentFilePath}) {
        nodes {
          body
          id
          internal {
            contentFilePath
          }
          frontmatter {
            title
            order
          }
        }
        distinct(field: frontmatter___order)
      }
    }
  `);

  let sortedDocsVersions = [...new Set(result.data.allMdx.nodes.map(c => getDocVersion(c.internal.contentFilePath)))];

  result.data.allMdx.nodes.forEach(node => {
    let transformedUrlPath = `/docs/${node.internal.contentFilePath.split(`src/content/docs/`).pop().split(`.mdx`)[0].split(' ').join('-').toLowerCase()}`;

    if (isNextVersion(transformedUrlPath, sortedDocsVersions)) {
      transformedUrlPath = transformedUrlPath.replaceAll(getDocVersion(transformedUrlPath), '').split(`//`).join(`/`);
    }

    console.log(node);

    createPage({
      path: transformedUrlPath,
      component: `${DocPageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id
      }
    });
  });
};
