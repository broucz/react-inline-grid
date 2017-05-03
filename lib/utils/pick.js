'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = pick;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashArrayCompact = require('lodash/array/compact');

var _lodashArrayCompact2 = _interopRequireDefault(_lodashArrayCompact);

var _lodashObjectGet = require('lodash/object/get');

var _lodashObjectGet2 = _interopRequireDefault(_lodashObjectGet);

var _memoize = require('./memoize');

var _memoize2 = _interopRequireDefault(_memoize);

var _invariant = require('./invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _capitalize = require('./capitalize');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _constants = require('../constants');

var parser = function parser(initial, input) {
  if (input && input.trim()) {
    return [initial].concat(input.trim().split(/\s+/));
  }
  return [initial];
};

exports.parser = parser;
var listReducer = function listReducer(name) {
  var list = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  return _lodashArrayCompact2['default'](list.map(function (n) {
    var _n$split = n.split('-');

    var entry = _n$split[0];

    var value = _n$split.slice(1);

    switch (value.length) {
      case 0:
        return entry;
      case 1:
        if (entry === 'offset') {
          return [entry].concat(value);
        }
        if (entry !== name) return false;
        return value[0];
      case 2:
        if (entry !== name) return false;
        if (value[0] === 'offset') {
          return value;
        }
        return false;
      default:
        return false;
    }
  }));
};

exports.listReducer = listReducer;
var generatePayload = function generatePayload(_ref, list) {
  var name = _ref.name;

  return {
    name: name,
    list: listReducer(name, list)
  };
};

exports.generatePayload = generatePayload;
var reducePayload = function reducePayload(_ref2, reference) {
  var name = _ref2.name;
  var list = _ref2.list;

  return list.reduce(function (acc, current) {
    var style = _lodashObjectGet2['default'](reference, [name].concat(current));
    return _extends({}, acc, style);
  }, {});
};

exports.reducePayload = reducePayload;
var getInReference = function getInReference(tag, _ref3) {
  var media = _ref3.media;
  var reference = _ref3.reference;
  var is = _ref3.is;

  var list = parser(tag, is);
  var payload = generatePayload(media, list);

  if (process.env.NODE_ENV !== 'production') {
    payload.list.forEach(function (n) {
      var value = Array.isArray(n) ? n[0] : n;
      _invariant2['default'](_constants.WHITE_LIST[tag].indexOf(value) > -1, 'Property \'' + value + '\' is not allowed for <' + _capitalize2['default'](tag) + '> component.');
    });
  }

  return reducePayload(payload, reference);
};

exports.getInReference = getInReference;
var memoizeProcess = function memoizeProcess() {
  for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  return _memoize2['default'](function () {
    return getInReference.apply(undefined, arg);
  });
};

exports.memoizeProcess = memoizeProcess;
var generateKey = function generateKey(tag, _ref4) {
  var name = _ref4.media.name;
  var is = _ref4.is;
  return '' + tag + name + is;
};

exports.generateKey = generateKey;

function pick() {
  var key = generateKey.apply(undefined, arguments);

  return memoizeProcess.apply(undefined, arguments)(key);
}