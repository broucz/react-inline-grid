'use strict';

exports.__esModule = true;
exports['default'] = memoize;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cache = require('./cache');

var _cache2 = _interopRequireDefault(_cache);

function memoize(callback) {
  return function getInMemory(key) {
    if (!_cache2['default'].hasOwnProperty(key)) {
      _cache2['default'][key] = callback.call(this, key);
    }
    return _cache2['default'][key];
  };
}

module.exports = exports['default'];