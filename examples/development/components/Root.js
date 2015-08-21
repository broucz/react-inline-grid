import React, { Component } from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';
import { COLOR } from '../constants';
import Box from './Box';

const { gray, primary } = COLOR;
const options = [
  {
    name: 'desktop',
    gutter: 16,
    margin: 16,
    columns: 12,
    order: 2,
    query: '(min-width: 840px)'
  },
  {
    name: 'tablet',
    gutter: 16,
    margin: 16,
    columns: 8,
    order: 1,
    query: '(min-width: 480px) and (max-width: 839px)'
  },
  {
    name: 'phone',
    gutter: 16,
    margin: 16,
    columns: 4,
    order: 0,
    query: '(max-width: 479px)'
  }
];

class Root extends Component {
  render() {
    return (
      <Grid options={options}>
        <Row is="center">
          <Cell is="11 tablet-4 phone-4">
            <Box size="big" color={gray}/>
          </Cell>
        </Row>
      </Grid>
    );
  }
}

export default Root;
