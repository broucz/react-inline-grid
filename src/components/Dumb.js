import React, { Component, Children, cloneElement, PropTypes } from 'react';
import reducePayload from '../utils/reducePayload';

const gridShape =
  PropTypes.shape({
    payload: React.PropTypes.object.isRequired,
    reference: React.PropTypes.object.isRequired
  }).isRequired;

export default class Dumb extends Component {
  static propTypes = {
    grid: gridShape,
    children: PropTypes.any
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.grid.payload !== this.props.grid.payload;
  }

  render() {
    const { grid, children, ...clean, } = this.props;
    return (
      <div style={reducePayload(grid)}>
        {Children.map(children, child => {
          return cloneElement(child, {...clean});
        })}
      </div>
    );
  }
}
