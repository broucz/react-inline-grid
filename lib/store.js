'use strict';

exports.__esModule = true;
exports['default'] = store;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _reducersMedia = require('./reducers/media');

var _reducersMedia2 = _interopRequireDefault(_reducersMedia);

var _reducersReference = require('./reducers/reference');

var _reducersReference2 = _interopRequireDefault(_reducersReference);

function store(initialState) {
  return _redux.createStore(_redux.combineReducers({ media: _reducersMedia2['default'], reference: _reducersReference2['default'] }), {
    media: _reducersMedia.hydrateMedia(initialState.media),
    reference: _reducersReference.hydrateReference(initialState.reference)
  });
}

module.exports = exports['default'];