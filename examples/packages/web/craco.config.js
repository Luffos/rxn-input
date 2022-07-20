/* eslint-disable no-unused-vars */
const webpack = require("webpack");
const path = require('path')

const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
  getLoader,
  loaderByName,
  getPlugin,
  pluginByName
} = require("@craco/craco");

const {
  getWebpackTools
} = require("react-native-monorepo-tools");

const monorepoWebpackTools = getWebpackTools();

const findWebpackPlugin = (webpackConfig, pluginName) =>
  webpackConfig.resolve.plugins.find(
    ({
      constructor
    }) => constructor && constructor.name === pluginName,
  );

const enableTypescriptImportsFromExternalPaths = (
  webpackConfig,
  newIncludePaths,
) => {
  const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
  if (oneOfRule) {
    const tsxRule = oneOfRule.oneOf.find(
      rule => rule.test && rule.test.toString().includes('tsx'),
    );

    if (tsxRule) {
      tsxRule.include = Array.isArray(tsxRule.include) ?
        [...tsxRule.include, ...newIncludePaths] :
        [tsxRule.include, ...newIncludePaths];
    }
  }
};

const addPathsToModuleScopePlugin = (webpackConfig, paths) => {
  const moduleScopePlugin = findWebpackPlugin(
    webpackConfig,
    'ModuleScopePlugin',
  );
  if (!moduleScopePlugin) {
    throw new Error(`Expected to find plugin "ModuleScopePlugin", but didn't.`);
  }
  moduleScopePlugin.appSrcs = [...moduleScopePlugin.appSrcs, ...paths];
};

const enableImportsFromExternalPaths = (webpackConfig, paths) => {
  enableTypescriptImportsFromExternalPaths(webpackConfig, paths);
  addPathsToModuleScopePlugin(webpackConfig, paths);
};

module.exports = function({
  env
}) {
  return {
    babel: {
      plugins: [
        ["module-resolver", {
          "alias": {
            "^react-native$": "react-native-web"
          }
        }]
      ],
    },
    webpack: {
      configure: (webpackConfig) => {

        enableImportsFromExternalPaths(webpackConfig, [
          path.resolve(__dirname, '../../../'),
        ]);

        // Allow importing from external workspaces.
        monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
        // Ensure nohoisted libraries are resolved from this workspace.
        monorepoWebpackTools.addNohoistAliases(webpackConfig);

        return webpackConfig;
      },
      plugins: {
        add: [
          // Inject the "__DEV__" global variable.
          new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV !== "production",
          }),
        ],
        remove: ["ManifestPlugin", "WorkboxWebpackPlugin", "WebpackManifestPlugin"]
      }
    },
  }
};