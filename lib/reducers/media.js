'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.hydrateMedia = hydrateMedia;
exports.updateMediaName = updateMediaName;
exports['default'] = media;

var _constants = require('../constants');

function hydrateMedia(_ref) {
  var name = _ref.name;

  return {
    name: name
  };
}

function updateMediaName(payload) {
  return {
    type: _constants.UPDATE_MEDIA_NAME,
    payload: payload
  };
}

function media() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case _constants.UPDATE_MEDIA_NAME:
      return _extends({}, state, {
        name: action.payload
      });
    default:
      return state;
  }
}