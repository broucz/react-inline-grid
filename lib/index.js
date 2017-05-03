'use strict';

exports.__esModule = true;

function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constants = require('./constants');

var _componentsCreateComponent = require('./components/createComponent');

var _componentsCreateComponent2 = _interopRequireDefault(_componentsCreateComponent);

var _componentsGrid = require('./components/Grid');

exports.Grid = _interopRequire(_componentsGrid);

var Row = _componentsCreateComponent2['default'](_constants.ROW_ID);
var Cell = _componentsCreateComponent2['default'](_constants.CELL_ID);

exports.Row = Row;
exports.Cell = Cell;