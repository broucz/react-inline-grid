import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import Code from 'react-embed-code';
import { COLOR } from '../constants';
import Box from './Box';

const { gray, primary } = COLOR;

const str1 = `<Row>
  <Cell is="12">
    <div style={gray}>
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
    <div style={gray}>
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
    <div style={gray}>
      <Row is="end">
        <Cell is="6 tablet-4 phone-2">
          <Box color={primary}/>
        </Cell>
      </Row>
    </div>
  </Cell>
</Row>
`;

const str2 = `<Row>
  <Cell is="12">
    <div style={gray}>
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
    <div style={gray}>
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
    <div style={gray}>
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
`;

class Alignments extends Component {
  render() {
    return (
      <div>
        <Row>
          <Cell is="12">
            <h3>Alignments</h3>
          </Cell>
        </Row>
        <Row>
          <Cell is="12">
            <div style={gray}>
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
            <div style={gray}>
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
            <div style={gray}>
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
          </Cell>
        </Row>

        <Row>
          <Cell is="12">
            <div style={gray}>
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
            <div style={gray}>
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
            <div style={gray}>
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
