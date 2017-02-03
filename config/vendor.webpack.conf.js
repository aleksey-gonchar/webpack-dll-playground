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
    library: '[name].bundle',
    libraryTarget: 'umd'
  },

  plugins: [new webpack.DllPlugin({
    context: helpers.root(),
    path: 'build/[name]-manifest.json',
  })]
};
