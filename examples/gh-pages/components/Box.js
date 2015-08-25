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
    const background = { background: color };
    return (
      <div style={{ ...boxDefault, ...boxStyle, ...background }}></div>
    );
  }
}

Box.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string
};

export default Box;
