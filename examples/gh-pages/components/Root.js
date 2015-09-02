import React, { Component } from 'react';
import { Grid, Row, Cell } from 'react-inline-grid';
import Header from './Header';
import Intro from './Intro';
import Alignments from './Alignments';
import Offset from './Offset';
import Distribution from './Distribution';
import Spacing from './Spacing';

class Root extends Component {
  render() {
    return (
      <Grid>
        <div>
          <Header/>
          <div className="pageContent">
            <Row is="center">
              <Cell is="10">
                <Intro/>
                <Alignments/>
                <Offset/>
                <Distribution/>
                <Spacing/>
              </Cell>
            </Row>
          </div>
        </div>
      </Grid>
    );
  }
}

export default Root;
