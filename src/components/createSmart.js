import { Map } from 'immutable';
import { connect } from 'react-redux';
import createDumb from './createDumb';
import generateList from '../utils/generateList';
import generatePayload from '../utils/generatePayload';

function mapStateToProps(state, ownProps) {
  const { is } = ownProps;
  return {
    is,
    context: state.context,
    reference: state.reference
  };
}

function mergeProps(stateProps, dispatchProps, parentProps) {
  const { is, ...clean } = parentProps;
  return {
    ...clean,
    grid: { ...stateProps, ...dispatchProps }
  };
}

export default function createSmart(React, tag) {
  const { Component, PropTypes } = React;
  const Dumb = createDumb(React);

  class Smart extends Component {
    shouldComponentUpdate(nextProps) {
      return nextProps.grid.context !== this.props.grid.context;
    }

    render() {
      const { grid, ...clean } = this.props;
      const { reference } = grid;
      const list = generateList(tag, grid.is);
      const payload = generatePayload(grid.context, list);

      return <Dumb grid={{ payload, reference }} {...clean}/>;
    }
  }

  Smart.propTypes = {
    grid: PropTypes.shape({
      context: PropTypes.instanceOf(Map).isRequired,
      dispatch: PropTypes.func.isRequired,
      is: PropTypes.string,
      reference: PropTypes.instanceOf(Map).isRequired
    }).isRequired
  };

  return connect(mapStateToProps, null, mergeProps)(Smart);
}
