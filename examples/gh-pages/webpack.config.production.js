'use strict';

var _ = require('lodash');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

module.exports = _.merge({}, baseConfig, {
  plugins: _.union(baseConfig.plugins, [
    new webpack.DefinePlugin({
      '__DEV__': 'false',
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      }
    })
  ])
});
