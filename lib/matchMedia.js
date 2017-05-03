"use strict";

exports.__esModule = true;
exports["default"] = matchMedia;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function setModel(options) {
  return options.map(function (n) {
    var name = n.name;
    var query = n.query;

    return {
      name: name,
      query: query
    };
  });
}

function setState(model, handleChange) {
  return model.map(function (_ref) {
    var name = _ref.name;
    var query = _ref.query;

    var match = window.matchMedia(query);
    match.add = function () {
      return match.addListener(handleChange);
    };
    match.add();
    match.remove = function () {
      return match.removeListener(handleChange);
    };

    return {
      name: name,
      match: match
    };
  });
}

var MatchMedia = (function () {
  function MatchMedia(list) {
    _classCallCheck(this, MatchMedia);

    this.listeners = [];
    this.state = [];
    this.model = setModel(list.slice());

    return this.updateState();
  }

  MatchMedia.prototype.handleChange = function handleChange() {
    this.state.slice().forEach(function (_ref2) {
      var match = _ref2.match;
      return match.remove();
    });

    return this.updateState();
  };

  MatchMedia.prototype.updateState = function updateState() {
    this.state = setState(this.model, this.handleChange.bind(this));

    return this.dispatchUpdate();
  };

  MatchMedia.prototype.getCurrentName = function getCurrentName() {
    var current = this.state.filter(function (_ref3) {
      var match = _ref3.match;
      return match.matches;
    });

    var _ref4 = current.length > 0 ? current[0] : this.model[0];

    var name = _ref4.name;

    return name;
  };

  MatchMedia.prototype.dispatchUpdate = function dispatchUpdate() {
    var current = this.getCurrentName();
    return this.listeners.slice().forEach(function (listener) {
      return listener(current);
    });
  };

  MatchMedia.prototype.subscribe = function subscribe(listener) {
    this.listeners.push(listener);

    return function unsubscribe() {
      if (this.listeners != null) {
        var index = this.listeners.indexOf(listener);
        this.listeners = this.listeners.slice(index, 1);
      }
    };
  };

  return MatchMedia;
})();

function matchMedia(list) {
  var mM = new MatchMedia(list);

  return {
    subscribe: mM.subscribe.bind(mM),
    getCurrentName: mM.getCurrentName()
  };
}

module.exports = exports["default"];