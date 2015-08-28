'use strict';

var _ = require('lodash');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

module.exports = _.merge({}, baseConfig, {
  plugins: _.union(baseConfig.plugins, [
    new webpack.DefinePlugin({
      '__DEV__': 'true',
      'process.env.NODE_ENV': '"development"'
    })
  ])
});
