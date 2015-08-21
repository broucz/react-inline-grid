import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';

class Header extends Component {
  render() {
    return (
      <Row is="around">
        <Cell is="12">
          <h3 className="mdl-typography--display-2 mdl-color-text--grey-600">react-inline-grid</h3>
        </Cell>
      </Row>
    );
  }
}

export default Header;
