import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import Code from 'react-embed-code';
import { COLOR } from '../constants';
import Box from './Box';

const { gray, primary } = COLOR;

const strSpace = `Remove <Row> padding and <Cell> margin.
`;

const str = `<Row is="center nospace">
  <Cell is="6 tablet-4 phone-2 nospace">
    <Box color={primary}/>
  </Cell>
</Row>
`;

class Spacing extends Component {
  render() {
    return (
      <div style={{marginTop: '4em'}}>
        <Row>
          <Cell is="12">
            <h2>No Spacing</h2>
            <Code embed={strSpace} />
          </Cell>
        </Row>

        <Row>
          <Cell is="12">
            <div style={{background: gray}}>
              <Row is="center nospace">
                <Cell is="nospace 6 tablet-4 phone-2">
                  <Box color={primary}/>
                </Cell>
              </Row>
            </div>
          </Cell>
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

export default Spacing;
