import React, { Component } from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';

const box = { background: '#bdbdbd', padding: '8px' };
const options = {
  gutter: 16,
  margin: 16,
  list: [
    {
      name: 'phone',
      query: '(max-width: 479px)'
    },
    {
      name: 'tablet',
      query: '(min-width: 480px) and (max-width: 839px)'
    },
    {
      name: 'desktop',
      query: '(min-width: 840px)'
    }
  ]
};

class Root extends Component {
  render() {
    return (
      <div>
        <Grid options={options}>
          <div>
            <Row is="center">
              <Cell is="6 tablet-2">
                <div style={{...box}}></div>
              </Cell>
            </Row>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Root;
