import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import Box from './Box';

const gray = '#bdbdbd';
const primary = '#4A75BD';

export default class Content extends Component {
  render() {
    return (
      <div style={{ marginTop: '3rem' }}>
        <Row>
          <Cell is="3 tablet-4 phone-4"><Box color={gray} size="big" /></Cell>
          <Cell is="3 tablet-4 phone-4"><Box color={gray} size="big" /></Cell>
          <Cell is="3 tablet-4 phone-4"><Box color={gray} size="big" /></Cell>
          <Cell is="3 tablet-4 phone-4"><Box color={primary} size="big" /></Cell>
        </Row>
      </div>
    );
  }
}
