import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import { COLOR } from '../constants';
import Box from './Box';

const { gray, primary } = COLOR;

class Distribution extends Component {
  render() {
    return (
      <div>
        <Row>
          <Cell is="12">
            <h3>Distribution</h3>
          </Cell>
        </Row>
        <Row>
          <Cell is="12">
            <div style={gray}>
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
            <div style={gray}>
              <Row is="between">
                <Cell is="2 phone-1"><Box color={primary}/></Cell>
                <Cell is="2 phone-1"><Box color={primary}/></Cell>
                <Cell is="2 phone-1"><Box color={primary}/></Cell>
              </Row>
            </div>
          </Cell>
        </Row>
      </div>
    );
  }
}

export default Distribution;
