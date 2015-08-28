'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'react-inline-grid': path.join(__dirname, '..', '..', 'src'),
      'react': path.resolve(__dirname, 'node_modules', 'react')
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
