'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = createComponent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// import PropTypes from 'prop-types';

var _reactRedux = require('react-redux');

var _utilsPick = require('../utils/pick');

var _utilsPick2 = _interopRequireDefault(_utilsPick);

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mergeProps = function mergeProps(stateProps, dispatchProps, _ref) {
  var is = _ref.is;

  var clean = _objectWithoutProperties(_ref, ['is']);

  return _extends({}, clean, {
    grid: _extends({}, stateProps, {
      is: is
    })
  });
};

var gridShape = PropTypes.shape({
  media: PropTypes.object.isRequired,
  reference: PropTypes.object.isRequired,
  is: PropTypes.string
}).isRequired;

var elem = function elem(tag) {
  return (function (_Component) {
    _inherits(Elem, _Component);

    function Elem() {
      _classCallCheck(this, Elem);

      _Component.apply(this, arguments);
    }

    Elem.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      if (process.env.NODE_ENV !== 'production') {
        return true;
      }

      if (process.env.NODE_ENV === 'production') {
        return nextProps.grid.media.name !== this.props.grid.media.name || nextProps.grid.is !== this.props.grid.is;
      }
    };

    Elem.prototype.render = function render() {
      var _props = this.props;
      var grid = _props.grid;
      var children = _props.children;

      var clean = _objectWithoutProperties(_props, ['grid', 'children']);

      return _react2['default'].createElement(
        'div',
        { style: _utilsPick2['default'](tag, grid) },
        _react.Children.map(children, function (child) {
          return _react.cloneElement(child, _extends({}, clean));
        })
      );
    };

    _createClass(Elem, null, [{
      key: 'propTypes',
      value: {
        grid: gridShape
      },
      enumerable: true
    }]);

    return Elem;
  })(_react.Component);
};

function createComponent(tag) {
  return _reactRedux.connect(mapStateToProps, null, mergeProps)(elem(tag));
}

module.exports = exports['default'];