const webpack = require('webpack');
const helpers = require('./helpers');
const context = helpers.root('src');

module.exports = {
  entry: {
    vendor: ['async', 'lodash'],
  },

  output: {
    path: './build',
    filename: '[name].bundle.js',
    library: '[name]',
    libraryTarget: 'umd'
  },

  plugins: [new webpack.DllPlugin({
    context: helpers.root(),
    name: '[name]',
    path: 'build/[name]-vendorManifest.json',
  })]
};
