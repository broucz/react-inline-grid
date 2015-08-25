import { Map } from 'immutable';
import reducePayload from '../utils/reducePayload';

export default function createDumb(React) {
  const { Component, Children, cloneElement, PropTypes } = React;

  class Dumb extends Component {
    shouldComponentUpdate(nextProps) {
      return !nextProps.grid.payload.equals(this.props.grid.payload);
    }

    render() {
      const {
        grid,
        children,
        ...clean,
      } = this.props;

      const result = reducePayload(grid.payload, grid.reference);

      return (
        <div style={result.toObject()}>
          {Children.map(children, child => {
            return cloneElement(child, {...clean});
          })}
        </div>
      );
    }
  }

  Dumb.propTypes = {
    grid: PropTypes.shape({
      payload: React.PropTypes.instanceOf(Map).isRequired,
      reference: React.PropTypes.instanceOf(Map).isRequired
    }).isRequired,
    children: PropTypes.any
  };

  return Dumb;
}
