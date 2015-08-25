import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import Code from 'react-embed-code';
import { COLOR } from '../constants';
import Box from './Box';

const { gray, primary } = COLOR;

const strAround = `<Cell> are positioned with space before && between && and after.
`;

const strBetween = `<Cell> are positioned with space between.
`;

const str1 = `<Row is="around">
  <Cell is="2 phone-1"><Box color={blue}/></Cell>
  <Cell is="2 phone-1"><Box color={blue}/></Cell>
  <Cell is="2 phone-1"><Box color={blue}/></Cell>
</Row>
`;

const str2 = `<Row is="between">
  <Cell is="2 phone-1"><Box color={blue}/></Cell>
  <Cell is="2 phone-1"><Box color={blue}/></Cell>
  <Cell is="2 phone-1"><Box color={blue}/></Cell>
</Row>
`;

class Distribution extends Component {
  render() {
    return (
      <div style={{marginTop: '4em'}}>
        <Row>
          <Cell is="12">
            <h2>Distribution</h2>
            <h4 style={{marginTop: '3em'}}>Around</h4>
            <Code embed={strAround} />
          </Cell>
        </Row>
        <Row>
          <Cell is="12">
            <div style={{background: gray}}>
              <Row is="around">
                <Cell is="2 phone-1"><Box color={primary}/></Cell>
                <Cell is="2 phone-1"><Box color={primary}/></Cell>
                <Cell is="2 phone-1"><Box color={primary}/></Cell>
              </Row>
            </div>
          </Cell>
        </Row>

        <Row>
          <Cell is="12">
            <Code embed={str1} />
            <h4 style={{marginTop: '3em'}}>Between</h4>
            <Code embed={strBetween} />
          </Cell>
        </Row>

        <Row>
          <Cell is="12">
            <div style={{background: gray}}>
              <Row is="between">
                <Cell is="2 phone-1"><Box color={primary}/></Cell>
                <Cell is="2 phone-1"><Box color={primary}/></Cell>
                <Cell is="2 phone-1"><Box color={primary}/></Cell>
              </Row>
            </div>
          </Cell>
        </Row>
        <Row>
          <Cell is="12">
            <Code embed={str2} />
          </Cell>
        </Row>
      </div>
    );
  }
}

export default Distribution;
