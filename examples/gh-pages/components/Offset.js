import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import Code from 'react-embed-code';
import { COLOR } from '../constants';
import Box from './Box';

const { primary } = COLOR;

const strOffset = `Apply 'margin-left' to <Cell>
`;

const str = `<Row>
  <Cell is="4 offset-6">
    <Box color={blue}/>
  </Cell>
</Row>
<Row>
  <Cell is="4 offset-4">
    <Box color={blue}/>
  </Cell>
</Row>
<Row>
  <Cell is="4 offset-2">
    <Box color={blue}/>
  </Cell>
</Row>
`;

class Offset extends Component {
  render() {
    return (
      <div style={{marginTop: '4em'}}>
        <Row>
          <Cell is="12">
            <h2>Offset</h2>
            <Code embed={strOffset} />
          </Cell>
        </Row>
        <Row>
          <Cell is="4 desktop-offset-6 tablet-4 tablet-offset-3 phone-2 phone-offset-2"><Box size="big" color={primary}/></Cell>
          <Cell is="4 desktop-offset-4 tablet-4 tablet-offset-2 phone-2 phone-offset-1"><Box size="big" color={primary}/></Cell>
          <Cell is="4 desktop-offset-2 tablet-4 tablet-offset-1 phone-2 phone-offset-0"><Box size="big" color={primary}/></Cell>
        </Row>
        <Row>
          <Cell is="12">
            <Code embed={str} />
          </Cell>
        </Row>
      </div>
    );
  }
}

export default Offset;
