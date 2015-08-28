'use strict';

var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

module.exports = _.merge({}, baseConfig, {
  entry: _.union(baseConfig.entry, [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ]),
  plugins: _.union(baseConfig.plugins, [
    new webpack.DefinePlugin({
      '__DEV__': 'false',
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ])
});
