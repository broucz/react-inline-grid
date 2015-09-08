import React, { Component, PropTypes, Children } from 'react';
import { Provider } from 'react-redux';
import matchMedia from '../matchMedia';
import store from '../store';
import { updateMediaName } from '../reducers/media';
import isWebKitNeeded from '../utils/isWebKitNeeded';
import { DEFAULT_MEDIA_OPTIONS } from '../constants';
import invariant from '../utils/invariant';

const optionsShape = PropTypes.shape({
  columns: PropTypes.number.isRequired,
  gutter: PropTypes.number,
  margin: PropTypes.number,
  deaf: PropTypes.bool,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired
    })
  ).isRequired
});

function setMedia({ getCurrentName }) {
  return {
    name: getCurrentName
  };
}

function setReference(options, fix) {
  return {
    options,
    fix
  };
}

function isValid(options) {
  if (process.env.NODE_ENV !== 'production') {
    const { columns, list } = options;
    const size = list.length;

    // Test columns number.
    invariant(
      !(columns % size) > 0,
      `Property 'columns' have to be a multiple of 'list.length'. (here multiple of ${size}).`
    );
  }

  return true;
}

export function setModel(options, defaultOptions) {
  if (options && isValid(options)) {
    return options;
  }
  return defaultOptions;
}

export default class Grid extends Component {
  static propTypes = {
    options: optionsShape,
    children: PropTypes.element.isRequired
  };

  constructor(props, context) {
    super(props, context);
    const UA = navigator.userAgent;

    const { options } = props;

    // Define model using `custom` || `default` options.
    // If `custom` is provided, it check is validity.
    // If it is invalid, it throw error in `development` and
    // apply `default` in production.
    // If is missing, return `default`.

    // TODO: apply default on missing fields.
    const model = setModel(options, DEFAULT_MEDIA_OPTIONS);
    const { list, deaf = false } = model;

    // It allow to subscribe to match media if `deaf` is
    // messing or !== to true.
    this.shouldSubscribe = deaf !== true;

    // Define `match` -> subscribe media queries changes and
    // return current media `name`
    this.match = matchMedia(list);

    // Helpers to initialize `store`.
    const media = setMedia(this.match);
    const reference = setReference(model, isWebKitNeeded(UA));

    this.store = store({ media, reference });
  }

  componentDidMount() {
    this.trySubscribe();
  }

  componentWillUnmount() {
    this.tryUnsubscribe();
  }

  render() {
    return (
      <Provider store={this.store}>
        {Children.only(this.props.children)}
      </Provider>
    );
  }

  trySubscribe() {
    if (this.shouldSubscribe && !this.unsubscribe) {
      this.unsubscribe =
        this.match.subscribe(this.handleChange.bind(this));
    }
  }

  tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }
  }

  handleChange(payload) {
    if (!this.unsubscribe) {
      return;
    }
    this.store.dispatch(updateMediaName(payload));
  }
}
