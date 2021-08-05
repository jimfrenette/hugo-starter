const baseConfig = require('./base.config.js');
const { merge } = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});