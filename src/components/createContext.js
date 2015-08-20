import { Map, List } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateContextScreen } from '../actions';
import matchMedia from '../matchMedia';

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    context: state.context
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:
      bindActionCreators({ updateContextScreen }, dispatch)
  };
}

function mergeProps(stateProps, dispatchProps) {
  return {
    grid: { ...stateProps, ...dispatchProps }
  };
}

export default function createContext(React) {
  const { Component, PropTypes } = React;

  class Context extends Component {
    constructor(props) {
      super(props);
      this.mediaChangeEmitter = matchMedia(props.grid.options);
    }

    componentDidMount() {
      this
        .mediaChangeEmitter
        .subscribe(this.handleMediaChange.bind(this));
    }

    render() {
      return <noscript/>;
    }

    handleMediaChange(payload) {
      this.props.grid.actions.updateContextScreen(payload);
    }
  }

  Context.propTypes = {
    grid: PropTypes.shape({
      actions: PropTypes.shape({
        updateContextScreen: PropTypes.func.isRequired
      }).isRequired,
      context: PropTypes.instanceOf(Map).isRequired,
      options: PropTypes.instanceOf(List).isRequired
    }).isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(Context);
}

