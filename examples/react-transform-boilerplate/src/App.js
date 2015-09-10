/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import { Grid } from 'react-inline-grid';
import ToolBar from './ToolBar';
import Content from './Content';

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

class WorkSpace extends Component {
  render() {
    return (
      <Grid options={options}>
        <div>
          <ToolBar />
          <Content />
        </div>
      </Grid>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <WorkSpace />
      </div>
    );
  }
}
