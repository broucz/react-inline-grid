'use strict';

var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);
config.entry = path.join(__dirname, 'index');
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
];
config.module = {
  loaders: [{
    test: /\.js$/,
    loaders: ['babel-loader'],
    exclude: /node_modules/
  }, {
    test: /\.css$/,
    loaders: [ 'style-loader', 'css-loader' ]
  }]
};

module.exports = config;
