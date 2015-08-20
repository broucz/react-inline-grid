import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import { COLOR } from '../constants';
import Box from './Box';

const { gray, primary } = COLOR;

class Alignments extends Component {
  render() {
    return (
      <div>
        <Row>
          <Cell is="12">
            <div className="mdl-typography--display-1 mdl-color-text--grey-600">Alignments</div>
          </Cell>
        </Row>

        <Row>
          <Cell is="12">
            <div className="mdl-typography--title mdl-color-text--grey-600">Row</div>
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
            <div className="mdl-typography--title mdl-color-text--grey-600">Cell</div>
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
      </div>
    );
  }
}

export default Alignments;
