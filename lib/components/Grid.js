'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports.ensureValue = ensureValue;
exports.ensureListProperties = ensureListProperties;
exports.build = build;
exports.setMedia = setMedia;
exports.setReference = setReference;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _matchMedia = require('../matchMedia');

var _matchMedia2 = _interopRequireDefault(_matchMedia);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _reducersMedia = require('../reducers/media');

var _constants = require('../constants');

var _utilsInvariant = require('../utils/invariant');

var _utilsInvariant2 = _interopRequireDefault(_utilsInvariant);

var optionsShape = _propTypes2['default'].shape({
  columns: _propTypes2['default'].number,
  gutter: _propTypes2['default'].number,
  margin: _propTypes2['default'].number,
  deaf: _propTypes2['default'].bool,
  list: _propTypes2['default'].arrayOf(_propTypes2['default'].shape({
    name: _propTypes2['default'].string.isRequired,
    query: _propTypes2['default'].string.isRequired,
    gutter: _propTypes2['default'].number,
    margin: _propTypes2['default'].number
  }))
});

function ensureValue(options, base, key, value) {
  if (process.env.NODE_ENV !== 'production') {
    _utilsInvariant2['default'](key, '<Grid> -> ensureValue -> key must be defined.');

    _utilsInvariant2['default'](base, '<Grid> -> ensureValue -> base must be defined.');

    _utilsInvariant2['default'](typeof base[key] !== 'undefined', '<Grid> -> ensureValue -> base -> key must be defined.');
  }

  if (value >= 0) return value;
  var result = options && options[key] >= 0 ? options[key] : base[key];
  return result;
}

function ensureListProperties(options, base, list) {
  return list.map(function (n) {
    var name = n.name;
    var query = n.query;
    var gutter = n.gutter;
    var margin = n.margin;

    return {
      name: name,
      query: query,
      gutter: ensureValue(options, base, 'gutter', gutter),
      margin: ensureValue(options, base, 'margin', margin)
    };
  });
}

function build() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var base = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var columns = options.columns;
  var _options$deaf = options.deaf;
  var deaf = _options$deaf === undefined ? false : _options$deaf;
  var _options$list = options.list;
  var list = _options$list === undefined ? base.list : _options$list;

  var size = list.length;

  _utilsInvariant2['default'](!!size, '<Grid> -> options -> list can not be empty');

  if (columns) {
    _utilsInvariant2['default'](!(columns % size) > 0, '<Grid> -> options -> columns must be a multiple of ' + '<Grid> -> options -> list -> length');
  }

  return {
    columns: columns || size * 4,
    deaf: deaf,
    list: ensureListProperties(options, base, list)
  };
}

function setMedia(name) {
  return { name: name };
}

function setReference(options) {
  return { options: options };
}

var Grid = (function (_Component) {
  _inherits(Grid, _Component);

  _createClass(Grid, null, [{
    key: 'propTypes',
    value: {
      options: optionsShape,
      children: _propTypes2['default'].element.isRequired
    },
    enumerable: true
  }]);

  function Grid(props, context) {
    _classCallCheck(this, Grid);

    _Component.call(this, props, context);

    // Initialize a new Model:
    // If <Grid> -> options is missing, it return a default Model.
    // if <Grid> -> options is provided, it return a valid Model.
    var model = build(props.options, _constants.MEDIA_MODEL_HELPER);

    this.match = _matchMedia2['default'](model.list);
    this.shouldSubscribe = model.deaf !== true;

    // Initialize Redux `store`.
    var media = setMedia(this.match.getCurrentName);
    var reference = setReference(model);
    this.store = _store2['default']({ media: media, reference: reference });
  }

  Grid.prototype.componentDidMount = function componentDidMount() {
    this.trySubscribe();
  };

  Grid.prototype.componentWillUnmount = function componentWillUnmount() {
    this.tryUnsubscribe();
  };

  Grid.prototype.render = function render() {
    return _react2['default'].createElement(
      _reactRedux.Provider,
      { store: this.store },
      _react.Children.only(this.props.children)
    );
  };

  Grid.prototype.trySubscribe = function trySubscribe() {
    if (this.shouldSubscribe && !this.unsubscribe) {
      this.unsubscribe = this.match.subscribe(this.handleChange.bind(this));
    }
  };

  Grid.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  };

  Grid.prototype.handleChange = function handleChange(payload) {
    if (!this.unsubscribe) {
      return;
    }
    this.store.dispatch(_reducersMedia.updateMediaName(payload));
  };

  return Grid;
})(_react.Component);

exports['default'] = Grid;