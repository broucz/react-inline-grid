'use strict';

exports.__esModule = true;
exports['default'] = calcPropWithGutter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashUtilityRange = require('lodash/utility/range');

var _lodashUtilityRange2 = _interopRequireDefault(_lodashUtilityRange);

function calcPropWithGutter(_ref, prop, isFull) {
  var start = _ref[0];
  var end = _ref[1];
  var gutter = _ref[2];

  return _lodashUtilityRange2['default'](start, end).reduce(function (acc, n) {
    var _acc$n;

    var width = isFull ? 100 : n / end * 100;
    acc[n] = (_acc$n = {}, _acc$n[prop] = 'calc(' + width + '% - ' + gutter + 'px)', _acc$n);
    return acc;
  }, {});
}

module.exports = exports['default'];