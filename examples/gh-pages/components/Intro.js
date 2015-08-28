import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import Code from 'react-embed-code';
import { COLOR } from '../constants';
import Box from './Box';

const { gray, primary } = COLOR;

const str = `Predictable flexbox based grid for React using Redux.
`;

class Intro extends Component {
  render() {
    return (
      <div>
        <Row>
          <Cell is="3 tablet-4 phone-4"><Box color={gray}/></Cell>
          <Cell is="3 tablet-4 phone-4"><Box color={gray}/></Cell>
          <Cell is="3 tablet-6 phone-4"><Box color={gray}/></Cell>
          <Cell is="3 tablet-2 phone-4"><Box color={primary}/></Cell>

          <Cell is="4 tablet-8 phone-2"><Box size="big" color={gray}/></Cell>
          <Cell is="4 tablet-8 phone-2"><Box size="big" color={gray}/></Cell>
          <Cell is="4 tablet-8"><Box size="big" color={primary}/></Cell>


          <Cell is="6 tablet-4"><Box size="huge" color={gray}/></Cell>
          <Cell is="4"><Box size="huge" color={gray}/></Cell>
          <Cell is="2 tablet-8 phone-4"><Box size="huge" color={primary}/></Cell>

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

export default Intro;
