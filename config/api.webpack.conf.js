const webpack = require('webpack');
const manifest = require('../build/vendor-manifest.json');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const helpers = require('./helpers');

module.exports = {
  entry: {
    name: './src/api_module/api.ts',
  },
  output: {
    path: helpers.root('build'),
    publicPath: './',
    filename: 'api.bundle.js',
    library: 'api',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      libs: helpers.root('build')
    }
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.DllReferencePlugin({
      context: helpers.root(),
      manifest: manifest,
      name: 'vendor',
      sourceType: 'umd'
  })]
};
