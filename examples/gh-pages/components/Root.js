import React, { Component } from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';
import Header from './Header';
import Intro from './Intro';
import Alignments from './Alignments';
import Distribution from './Distribution';
import Spacing from './Spacing';

class Root extends Component {
  render() {
    return (
      <Grid>
        <Row is="center">
          <Cell is="10">
            <Header/>
            <Intro/>
            <Alignments/>
            <Distribution/>
            <Spacing/>
          </Cell>
        </Row>
      </Grid>
    );
  }
}

export default Root;
