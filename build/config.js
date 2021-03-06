'use strict'
const path = require('path')

module.exports = {
  dev: {
    env: 'development',
    port: process.env.PORT || 9527,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/legacy': {
        target: 'http://172.28.10.6:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    cssSourceMap: false,
    bundleAnalyzerReport: process.env.npm_config_report
  },
  build: {
    env: 'production',
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
