const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const {
  override,
  addWebpackAlias,
  addWebpackPlugin
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
    "@components": path.resolve(__dirname, "./src/components"),
  }),
  addWebpackPlugin(
    new FriendlyErrorsWebpackPlugin(),
    new HardSourceWebpackPlugin()
  )
)
