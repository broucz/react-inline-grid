'use strict';

exports.__esModule = true;

var _WHITE_LIST;

var UPDATE_MEDIA_NAME = 'media/name/UPDATE';
exports.UPDATE_MEDIA_NAME = UPDATE_MEDIA_NAME;
var ROW_ID = 'row';
exports.ROW_ID = ROW_ID;
var CELL_ID = 'cell';
exports.CELL_ID = CELL_ID;
var MEDIA_MODEL_HELPER = {
  gutter: 16,
  margin: 16,
  list: [{
    name: 'phone',
    query: '(max-width: 479px)'
  }, {
    name: 'tablet',
    query: '(min-width: 480px) and (max-width: 839px)'
  }, {
    name: 'desktop',
    query: '(min-width: 840px)'
  }]
};
exports.MEDIA_MODEL_HELPER = MEDIA_MODEL_HELPER;
var WHITE_LIST = (_WHITE_LIST = {}, _WHITE_LIST[ROW_ID] = ['row', 'start', 'center', 'end', 'around', 'between', 'nospace'], _WHITE_LIST[CELL_ID] = ['cell', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'top', 'middle', 'bottom', 'stretch', 'between', 'offset', 'nospace'], _WHITE_LIST);
exports.WHITE_LIST = WHITE_LIST;