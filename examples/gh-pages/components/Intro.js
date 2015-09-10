import React, { Component } from 'react';
import { Row, Cell } from 'react-inline-grid';
import { COLOR } from '../constants';
import Box from './Box';

const { gray, primary } = COLOR;

class Intro extends Component {
  render() {
    return (
      <div>
        <Row is="center">
          <Cell is="10">
            <p style={{textAlign: 'center'}}>A predictable gird layout based on flexbox for <a href="https://facebook.github.io/react/" target="_blank">React</a> applications using inline styles.</p>
          </Cell>
        </Row>
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
      </div>
    );
  }
}

export default Intro;
