import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';

class Header extends Component {
  render() {
    return (
      <Row>
        <Cell is="12">
          <h1>react-inline-grid</h1>
        </Cell>
      </Row>
    );
  }
}

export default Header;
