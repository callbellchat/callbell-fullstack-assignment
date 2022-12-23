const { environment } = require('@rails/webpacker');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

environment.plugins.append(
  'html',
  new HtmlWebpackPlugin({
    alwaysWriteToDisk: true,
    title: 'Callbell Full Stack Test',
  })
);

environment.plugins.append('html-harddisk', new HtmlWebpackHarddiskPlugin());

module.exports = environment;
