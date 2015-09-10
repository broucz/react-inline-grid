import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Cell } from 'react-inline-grid';
import { updateMediaName } from './actionCreators';

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateMediaName }, dispatch);
};

const container = {
  color: '#fff',
  fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
  fontSize: '.9rem',
  background: '#4A75BD'
};

const btn = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '.75em 1em',
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.7)',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '0.3em'
};

class ToolBar extends Component {
  static propTypes = {
    updateMediaName: PropTypes.func.isRequired
  };

  render() {
    return (
      <div style={container}>
        <Row is="center">
          <Cell is="3 tablet-2 phone-1" onClick={this.handleUpdateMediaName.bind(this, 'phone')}>
            <div style={btn}>phone</div>
          </Cell>
          <Cell is="3 tablet-2 phone-1" onClick={this.handleUpdateMediaName.bind(this, 'tablet')}>
            <div style={btn}>tablet</div>
          </Cell>
          <Cell is="3 tablet-2 phone-1" onClick={this.handleUpdateMediaName.bind(this, 'desktop')}>
            <div style={btn}>desktop</div>
          </Cell>
        </Row>
      </div>
    );
  }

  handleUpdateMediaName(name) {
    return this.props.updateMediaName(name);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBar);
