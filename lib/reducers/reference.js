'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.hydrateReference = hydrateReference;
exports['default'] = reference;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsIsUAFixNeeded = require('../utils/isUAFixNeeded');

var _utilsIsUAFixNeeded2 = _interopRequireDefault(_utilsIsUAFixNeeded);

var _utilsFixUserAgent = require('../utils/fixUserAgent');

var _utilsFixUserAgent2 = _interopRequireDefault(_utilsFixUserAgent);

var _utilsCalcPropWithGutter = require('../utils/calcPropWithGutter');

var _utilsCalcPropWithGutter2 = _interopRequireDefault(_utilsCalcPropWithGutter);

var _constants = require('../constants');

var ROW_ROOT = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'stretch'
};

var buildRow = function buildRow(id, FIXED_ROW, gutter, margin) {
  var _ref;

  return _ref = {}, _ref[id] = _extends({}, FIXED_ROW, {
    padding: margin - gutter / 2 + 'px'
  }), _ref;
};

exports.buildRow = buildRow;
var buildRowTypeProperties = function buildRowTypeProperties(justifyContent) {
  var _start, _center, _end, _around, _between;

  return {
    start: (_start = {}, _start[justifyContent] = 'flex-start', _start),
    center: (_center = {}, _center[justifyContent] = 'center', _center),
    end: (_end = {}, _end[justifyContent] = 'flex-end', _end),
    around: (_around = {}, _around[justifyContent] = 'space-around', _around),
    between: (_between = {}, _between[justifyContent] = 'space-between', _between)
  };
};

exports.buildRowTypeProperties = buildRowTypeProperties;
var buildCell = function buildCell(id, gutter) {
  var _ref2;

  return _ref2 = {}, _ref2[id] = {
    boxSizing: 'border-box',
    margin: gutter / 2 + 'px',
    width: 'calc(100% - ' + gutter + 'px)'
  }, _ref2;
};

exports.buildCell = buildCell;
var buildCellTypeProperties = function buildCellTypeProperties(alignSelf) {
  var _top, _middle, _bottom, _stretch;

  return {
    top: (_top = {}, _top[alignSelf] = 'flex-start', _top),
    middle: (_middle = {}, _middle[alignSelf] = 'center', _middle),
    bottom: (_bottom = {}, _bottom[alignSelf] = 'flex-end', _bottom),
    stretch: (_stretch = {}, _stretch[alignSelf] = 'stretch', _stretch)
  };
};

exports.buildCellTypeProperties = buildCellTypeProperties;
var buildSharedProperties = function buildSharedProperties() {
  return {
    nospace: { padding: 0, margin: 0 }
  };
};

exports.buildSharedProperties = buildSharedProperties;

function hydrateReference(_ref3) {
  var options = _ref3.options;
  var columns = options.columns;
  var list = options.list;

  var size = list.length;

  return list.reduce(function (acc, current, i) {
    var _extends2;

    var name = current.name;
    var gutter = current.gutter;
    var margin = current.margin;

    var _fixUserAgent = _utilsFixUserAgent2['default'](ROW_ROOT, _utilsIsUAFixNeeded2['default'](navigator.userAgent));

    var justifyContent = _fixUserAgent.justifyContent;
    var alignSelf = _fixUserAgent.alignSelf;
    var FIXED_ROW = _fixUserAgent.FIXED_ROW;

    // 4
    // 8
    // 12
    var localColumns = columns / size * (i + 1);

    // Define partial sizes for columnNumber < totalColumns.
    var partialWidth = _utilsCalcPropWithGutter2['default']([1, localColumns, gutter], 'width');

    // Define sizes = 100% for everything else.
    var fullWidth = _utilsCalcPropWithGutter2['default']([localColumns, columns + 1, gutter], 'width', true);

    // Define offset sizes.
    var offset = _utilsCalcPropWithGutter2['default']([0, localColumns, gutter / 2], 'marginLeft');

    var row = buildRow(_constants.ROW_ID, FIXED_ROW, gutter, margin);
    var rowTypeProperties = buildRowTypeProperties(justifyContent);

    var cell = buildCell(_constants.CELL_ID, gutter);
    var cellTypeProperties = buildCellTypeProperties(alignSelf);

    var sharedProperties = buildSharedProperties();

    return _extends({}, acc, (_extends2 = {}, _extends2[name] = _extends({}, row, rowTypeProperties, cell, cellTypeProperties, partialWidth, fullWidth, sharedProperties, {
      offset: _extends({}, offset)
    }), _extends2));
  }, {});
}

function reference() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return state;
}