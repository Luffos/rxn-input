const path = require('path');
const DocPageTemplate = path.resolve('./src/templates/DocPage.tsx');
const fs = require('fs');
const docsSchema = require(`./src/content/docs/schema.json`);
const internal = require('stream');

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr);
    }

    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

function getDocVersion(fullPath) {
  return `${fullPath}`.split('docs/').pop().split('/')[0];
}

function isNextVersion(fullPath, sortedDocsVersions) {
  return sortedDocsVersions.slice(-1)[0] == getDocVersion(fullPath);
}

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;

  const allMdxQuery = await graphql(`
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

  const docsData = docsSchema;
  Object.keys(docsData).forEach(version => {
    Object.keys(docsData[version]).forEach(folder => {
      if (String(docsData[version][folder]).toLowerCase() == 'asc') {
        let filtered = allMdxQuery.data.allMdx.nodes.filter(node => node.internal.contentFilePath.startsWith(node.internal.contentFilePath.split(`src/content/docs/${version}/${folder}`)));
        filtered = filtered.map(o => ({
          id: o.id,
          body: o.body,
          frontmatter: o.frontmatter
        }));
        docsData[version][folder] = filtered;
        return;
      }
    });
  });

  console.log(docsData);
  console.log('----------------------------');

  if (!fs.existsSync(path.resolve(__dirname, 'public/docs/'))) {
    fs.mkdirSync(path.resolve(__dirname, 'public/docs/'), {recursive: true});
  }
  fs.writeFileSync(path.resolve(__dirname, 'public/docs/data.json'), JSON.stringify(docsData, null, 4), 'utf-8');

  let sortedDocsVersions = [...new Set(allMdxQuery.data.allMdx.nodes.map(c => getDocVersion(c.internal.contentFilePath)))];

  allMdxQuery.data.allMdx.nodes.forEach(node => {
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
        id: node.id
      }
    });
  });
};
