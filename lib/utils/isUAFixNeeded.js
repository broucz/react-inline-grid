'use strict';

exports.__esModule = true;
exports['default'] = isUAFixNeeded;

function isUAFixNeeded(userAgent) {
  return userAgent.indexOf('Chrome') < 0 && userAgent.indexOf('Safari') > -1;
}

module.exports = exports['default'];