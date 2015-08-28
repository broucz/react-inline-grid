import React, { Component } from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';
import range from 'lodash/utility/range';

const box = { background: '#bdbdbd', padding: '8px', height: '136px' };

function generatePattern(n) {
  return (
    <Row key={n} is="center">
      <Cell is="10">
        <Row>
          <Cell is="3 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-6 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-2 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-6 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-2 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-6 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-2 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-6 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="3 tablet-2 phone-4"><div style={{...box}}></div></Cell>
        </Row>
      </Cell>

      <Cell is="8">
        <Row>
          <Cell is="4 tablet-8 phone-2"><div style={{...box}}></div></Cell>
          <Cell is="4 tablet-8 phone-2"><div style={{...box}}></div></Cell>
          <Cell is="4 tablet-8"><div style={{...box}}></div></Cell>
        </Row>
      </Cell>

      <Cell is="12">
        <Row>
          <Cell is="6 tablet-4"><div style={{...box}}></div></Cell>
          <Cell is="4"><div style={{...box}}></div></Cell>
          <Cell is="2 tablet-8 phone-4"><div style={{...box}}></div></Cell>
        </Row>
      </Cell>
    </Row>
  );
}

class Root extends Component {
  render() {
    const size = 100;
    return (
      <div>
        <h3>Pattern * {size} => Connected component: {size * 100} | Row: {size * 4} | Cell: {size * 25}</h3>
        <Grid>
          {range(1, size).map(n => {
            return generatePattern(n);
          })}
        </Grid>
      </div>
    );
  }
}

export default Root;
