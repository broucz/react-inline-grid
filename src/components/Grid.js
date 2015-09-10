import React, { Component, PropTypes, Children } from 'react';
import { Provider } from 'react-redux';
import matchMedia from '../matchMedia';
import store from '../store';
import { updateMediaName } from '../reducers/media';
import { MEDIA_MODEL_HELPER } from '../constants';
import invariant from '../utils/invariant';

const optionsShape = PropTypes.shape({
  columns: PropTypes.number,
  gutter: PropTypes.number,
  margin: PropTypes.number,
  deaf: PropTypes.bool,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
      gutter: PropTypes.number,
      margin: PropTypes.number
    })
  )
});

export function ensureValue(options, base, key, value) {
  if (process.env.NODE_ENV !== 'production') {
    invariant(
      key,
      `<Grid> -> ensureValue -> key must be defined.`
    );

    invariant(
      base,
      `<Grid> -> ensureValue -> base must be defined.`
    );

    invariant(
      (typeof base[key] !== 'undefined'),
      `<Grid> -> ensureValue -> base -> key must be defined.`
    );
  }

  if (value >= 0) return value;
  const result = (options && options[key] >= 0)
    ? options[key]
    : base[key];
  return result;
}

export function ensureListProperties(options, base, list) {
  return list.map(n => {
    const { name, query, gutter, margin } = n;
    return {
      name,
      query,
      gutter: ensureValue(options, base, 'gutter', gutter),
      margin: ensureValue(options, base, 'margin', margin)
    };
  });
}

export function build(options = {}, base = {}) {
  const {
    columns,
    deaf = false,
    list = base.list
  } = options;

  const size = list.length;

  invariant(
    !!size,
    '<Grid> -> options -> list can not be empty'
  );

  if (columns) {
    invariant(
      !(columns % size) > 0,
      '<Grid> -> options -> columns must be a multiple of ' +
      '<Grid> -> options -> list -> length'
    );
  }

  return {
    columns: columns || size * 4,
    deaf,
    list: ensureListProperties(options, base, list)
  };
}

export function setMedia(name) {
  return { name };
}

export function setReference(options) {
  return { options };
}

export default class Grid extends Component {
  static propTypes = {
    options: optionsShape,
    children: PropTypes.element.isRequired
  };

  constructor(props, context) {
    super(props, context);

    // Initialize a new Model:
    // If <Grid> -> options is missing, it return a default Model.
    // if <Grid> -> options is provided, it return a valid Model.
    const model = build(props.options, MEDIA_MODEL_HELPER);

    this.match = matchMedia(model.list);
    this.shouldSubscribe = model.deaf !== true;

    // Initialize Redux `store`.
    const media = setMedia(this.match.getCurrentName);
    const reference = setReference(model);
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
