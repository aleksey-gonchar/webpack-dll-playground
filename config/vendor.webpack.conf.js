const webpack = require('webpack');
const helpers = require('./helpers');
const context = helpers.root('src');

module.exports = {
  entry: {
    vendor: helpers.root('src', 'vendor.ts'),
  },

  output: {
    path: './build',
    filename: '[name].bundle.js',
    library: '[name].bundle',
    libraryTarget: 'umd'
  }
}
