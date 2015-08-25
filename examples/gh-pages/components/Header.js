import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';

class Header extends Component {
  render() {
    return (
      <Row>
        <Cell is="12">
          <h1 style={{color: '#333'}}>react-inline-grid</h1>
        </Cell>
      </Row>
    );
  }
}

export default Header;
