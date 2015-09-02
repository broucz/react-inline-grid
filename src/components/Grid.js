import React, { Component, PropTypes, Children } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import matchMedia from '../matchMedia';
import { updateContextScreen } from '../actions';
import { DEFAULT_SCREEN_OPTIONS } from '../constants';

const ensureOptions =
  options => options || DEFAULT_SCREEN_OPTIONS;

const optionsShape =
  PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gutter: PropTypes.number,
      margin: PropTypes.number,
      columns: PropTypes.number,
      query: PropTypes.string.isRequired
    })
  );

export default class Grid extends Component {
  static propTypes = {
    options: optionsShape,
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);
    const options = ensureOptions(props.options);
    this.store = store(options);
    this.match = matchMedia(options);
  }

  componentDidMount() {
    this.match.subscribe(this.handleMatchChange.bind(this));
  }

  render() {
    return (
      <Provider store={this.store}>
        {Children.only(this.props.children)}
      </Provider>
    );
  }

  handleMatchChange(payload) {
    this.store.dispatch(updateContextScreen(payload));
  }
}
