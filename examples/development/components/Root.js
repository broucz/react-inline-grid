import React, { Component } from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';

const box = { background: '#bdbdbd', padding: '8px' };
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
      <div>
        <Grid options={options}>
          <Row is="center">
            <Cell is="6">
              <div style={{...box}}></div>
            </Cell>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Root;
