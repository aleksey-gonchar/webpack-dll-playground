'use strict'
const helpers = require('./helpers')

// Short usage reference
// `ENV` = local | development | stage | release | production
// `NODE_ENV` = development | test | production
// `MOCK_MODE` = none | api | loader | all
// `LOG_LEVEL` = error | warn | info | debug

module.exports = {
  data: {
    cache: true,
    resolve: {
      extensions: [ '.ts', '.js', '.scss' ],
      modules: [
        helpers.root(),
        helpers.root('src'),
        helpers.root('build'),
        'node_modules'
      ],
      mainFiles: [ 'index' ]
    },
    output: {
      path: helpers.root('build'),
      filename: '[name].js',
      sourceMapFilename: '[name].map',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.ts$/,
          /* for migration on webpack it's no more needed to use loader key. Please, see: https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules */
          use: 'tslint-loader',
          exclude: [
            /build/,
            /node_modules/,
            /\.(spec|e2e)\.ts$/
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        },
        {
          test: /\.ts$/,
          use: 'awesome-typescript-loader',
          exclude: [ /\.(spec|e2e)\.ts$/ ]
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.html$/,
          use: 'raw',
          exclude: [ helpers.root('src/index.html') ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          use: 'file?name=assets/[name].[hash].[ext]'
        },
        {
          test: /\.scss/,
          use: 'raw!postcss?sourceMap!sass?sourceMap',
          include: helpers.root('src/app')
        },
        {
          test: /main\.scss/,
          use: 'style!css!postcss!sass'
        },
        {
          test: /\.css/,
          use: 'style!css!postcss'
        }
      ],
      noParse: [
        /zone\.js\/dist\/.+/,
        /angular2\/bundles\/.+/,
        /\.(spec|e2e)\.ts$/
      ]
    },
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    },
    devServer: {
      port: 8081
    }
  }
}
