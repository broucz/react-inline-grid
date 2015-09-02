'use strict';

var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

var reduxExternal = {
  root: 'Redux',
  commonjs2: 'redux',
  commonjs: 'redux',
  amd: 'redux'
};

module.exports = {
  externals: {
    'react': reactExternal,
    'redux': reduxExternal
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', 'lodash')
        ]
      }
    ]
  },
  node: {
    process: false
  },
  output: {
    library: 'ReactInlineGrid',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
