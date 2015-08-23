'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-inline-grid': path.join(__dirname, '..', '..', 'src'),
      'react': path.resolve(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.scss']
  }
};
