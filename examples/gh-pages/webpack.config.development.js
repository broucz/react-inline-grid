'use strict';

var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);
config.devtool = 'cheap-module-eval-source-map';
config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  path.join(__dirname, 'index')
];
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];
config.module = {
  loaders: [{
    test: /\.js$/,
    loaders: ['react-hot', 'babel-loader'],
    exclude: /node_modules/
  }, {
    test: /\.scss$/,
    loader: 'style!css!sass',
    include: path.join(__dirname, 'styles')
  }]
};

module.exports = config;
