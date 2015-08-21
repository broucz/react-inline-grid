import React, { Component, PropTypes } from 'react';

const STYLE_PROPS = {
  boxDefault: {
    color: 'white',
    paddingLeft: '8px',
    paddingTop: '4px'
  },
  box: { height: '30px' },
  big: { height: '90px' },
  huge: { height: '200px' }
};

const { boxDefault } = STYLE_PROPS;

class Box extends Component {
  render() {
    const { color, size } = this.props;
    const boxStyle =
      STYLE_PROPS[size]
      || STYLE_PROPS.box;
    return (
      <div style={{ ...boxDefault, ...boxStyle, ...color }}></div>
    );
  }
}

Box.propTypes = {
  color: PropTypes.object,
  size: PropTypes.string
};

export default Box;
