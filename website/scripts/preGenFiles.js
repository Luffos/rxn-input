/* eslint-disable @typescript-eslint/no-var-requires */
const DocsDataPlugin = require('./.webpack/plugins/DocsDataPlugin');

try {
  new DocsDataPlugin().preBuild();
} catch (error) {
}
