const path = require('path');
const DocPageTemplate = path.resolve('./src/templates/DocPage.tsx');
const fs = require('fs');

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
          }
        }
      }
    }
  `);

  fs.writeFileSync(path.resolve(__dirname, 'public/docs/test.json'), JSON.stringify({test: 2}));

  let sortedDocsVersions = [...new Set(result.data.allMdx.nodes.map(c => getDocVersion(c.internal.contentFilePath)))];

  result.data.allMdx.nodes.forEach(node => {
    let pagePath = `/docs/${node.internal.contentFilePath.split(`src/content/docs/`).pop().split(`.mdx`)[0].split(' ').join('-').toLowerCase()}`;
    let docVersion = getDocVersion(pagePath);

    // Remove vXXXXX from url if is "next" (latest)
    if (isNextVersion(pagePath, sortedDocsVersions)) {
      pagePath = pagePath.replaceAll(docVersion, '').split(`//`).join(`/`);
    }

    createPage({
      path: pagePath,
      component: `${DocPageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        docVersion: docVersion,
        id: node.id,
        others: result.data.allMdx.nodes
      }
    });
  });
};

exports.onPostBuild = async ({graphql}) => {
  try {
  
  } catch (error) {
    console.log('error test.json');
  } finally {
    console.log('test');
  }
};
