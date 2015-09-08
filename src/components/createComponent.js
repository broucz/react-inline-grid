import React, { Component, PropTypes, Children, cloneElement } from 'react';
import { connect } from 'react-redux';
import getStyle from '../utils/getStyle';

const mapStateToProps = state => ({ ...state });

const mergeProps =
  (stateProps, dispatchProps, { is, ...clean }) => ({
    ...clean,
    grid: {
      ...stateProps,
      is
    }
  });

const gridShape =
  PropTypes.shape({
    media: PropTypes.object.isRequired,
    is: PropTypes.string,
    reference: PropTypes.object.isRequired
  }).isRequired;

export function elem(tag) {
  return class Elem extends Component {
    static propTypes = {
      grid: gridShape
    };

    shouldComponentUpdate(nextProps) {
      return nextProps.grid.media.name !== this.props.grid.media.name;
    }

    render() {
      const { grid, children, ...clean } = this.props;
      return (
        <div style={getStyle(tag, grid)}>
          {Children.map(children, child => {
            return cloneElement(child, {...clean});
          })}
        </div>
      );
    }
  };
}

export default function createComponent(tag) {
  return connect(
    mapStateToProps,
    null,
    mergeProps)(elem(tag));
}
