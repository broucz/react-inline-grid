import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import Code from 'react-embed-code';
import { COLOR } from '../constants';
import Box from './Box';

const { gray, primary } = COLOR;

const strHorizontal = `Place <Cell> at the 'start', 'center', or 'end' of a <Row>.
`;

const strVertical = `Place <Cell> at the 'top', 'middle', or 'bottom' of a <Row>.
`;

const str1 = `<Row is="start">
  <Cell is="6 tablet-4 phone-2">
    <Box color={blue}/>
  </Cell>
</Row>

<Row is="center">
  <Cell is="6 tablet-4 phone-2">
    <Box color={blue}/>
  </Cell>
</Row>

<Row is="end">
  <Cell is="6 tablet-4 phone-2">
    <Box color={blue}/>
  </Cell>
</Row>
`;

const str2 = `<Row>
  <Cell is="6 tablet-4 phone-2">
    <Box size="big" color={blue}/>
  </Cell>
  <Cell is="top 6 tablet-4 phone-2">
    <Box color={blue}/>
  </Cell>
</Row>

<Row>
  <Cell is="6 tablet-4 phone-2">
    <Box size="big" color={blue}/>
  </Cell>
  <Cell is="middle 6 tablet-4 phone-2">
    <Box color={blue}/>
  </Cell>
</Row>

<Row>
  <Cell is="6 tablet-4 phone-2">
    <Box size="big" color={blue}/>
  </Cell>
  <Cell is="bottom 6 tablet-4 phone-2">
    <Box color={blue}/>
  </Cell>
</Row>
`;

class Alignments extends Component {
  render() {
    return (
      <div style={{marginTop: '4em'}}>
        <Row>
          <Cell is="12">
            <h2>Alignments</h2>
            <h4 style={{marginTop: '3em'}}>Horizontal</h4>
            <Code embed={strHorizontal} />
          </Cell>
        </Row>
        <Row>
          <Cell is="12">
            <div style={{background: gray}}>
              <Row is="start">
                <Cell is="6 tablet-4 phone-2">
                  <Box color={primary}/>
                </Cell>
              </Row>
            </div>
          </Cell>
        </Row>
        <Row>
          <Cell is="12">
            <div style={{background: gray}}>
              <Row is="center">
                <Cell is="6 tablet-4 phone-2">
                  <Box color={primary}/>
                </Cell>
              </Row>
            </div>
          </Cell>
        </Row>
        <Row>
          <Cell is="12">
            <div style={{background: gray}}>
              <Row is="end">
                <Cell is="6 tablet-4 phone-2">
                  <Box color={primary}/>
                </Cell>
              </Row>
            </div>
          </Cell>
        </Row>

        <Row>
          <Cell is="12">
            <Code embed={str1} />
            <h4 style={{marginTop: '3em'}}>Vertical</h4>
            <Code embed={strVertical} />
          </Cell>
        </Row>

        <Row>
          <Cell is="12">
            <div style={{background: gray}}>
              <Row>
                <Cell is="6 tablet-4 phone-2">
                  <Box size="big" color={primary}/>
                </Cell>
                <Cell is="top 6 tablet-4 phone-2">
                  <Box color={primary}/>
                </Cell>
              </Row>
            </div>
          </Cell>
        </Row>
        <Row>
          <Cell is="12">
            <div style={{background: gray}}>
              <Row>
                <Cell is="6 tablet-4 phone-2">
                  <Box size="big" color={primary}/>
                </Cell>
                <Cell is="middle 6 tablet-4 phone-2">
                  <Box color={primary}/>
                </Cell>
              </Row>
            </div>
          </Cell>
        </Row>
        <Row>
          <Cell is="12">
            <div style={{background: gray}}>
              <Row>
                <Cell is="6 tablet-4 phone-2">
                  <Box size="big" color={primary}/>
                </Cell>
                <Cell is="bottom 6 tablet-4 phone-2">
                  <Box color={primary}/>
                </Cell>
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

export default Alignments;
