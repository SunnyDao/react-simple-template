'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve('dist')
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
    })
  ],
  devServer: {},
  mode: 'production'
}