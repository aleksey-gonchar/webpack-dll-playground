const webpack = require('webpack');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const helpers = require('./helpers');

const manifest = require('@solid-opinion/vendor-core/dist/bundle-manifest.json')

module.exports = {
  entry: {
    name: './src/api_module/api.ts',
  },
  output: {
    path: helpers.root('build'),
    publicPath: './',
    filename: 'api.bundle.js',
    library: 'api.bundle',
    libraryTarget: 'umd',
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.DllReferencePlugin({
      manifest,
      sourceType: 'umd'
    })]
};
