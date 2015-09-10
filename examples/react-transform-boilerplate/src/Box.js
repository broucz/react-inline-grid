import React, { Component, PropTypes } from 'react';

const container = {
  box: { height: '30px' },
  big: { height: '90px' },
  huge: { height: '200px' }
};

export default class Box extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    size: PropTypes.string
  };

  render() {
    const { color, size } = this.props;
    const height = container[size] || container.box;
    const background = { background: color };
    return (
      <div style={{...height, ...background}}></div>
    );
  }
}
