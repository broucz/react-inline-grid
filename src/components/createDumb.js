import reducePayload from '../utils/reducePayload';

export default function createDumb(React) {
  const { Component, Children, cloneElement, PropTypes } = React;

  class Dumb extends Component {
    shouldComponentUpdate(nextProps) {
      return nextProps.grid.payload !== this.props.grid.payload;
    }

    render() {
      const {
        grid,
        children,
        ...clean,
      } = this.props;

      const result = reducePayload(grid.payload, grid.reference);

      return (
        <div style={result}>
          {Children.map(children, child => {
            return cloneElement(child, {...clean});
          })}
        </div>
      );
    }
  }

  Dumb.propTypes = {
    grid: PropTypes.shape({
      payload: React.PropTypes.object.isRequired,
      reference: React.PropTypes.object.isRequired
    }).isRequired,
    children: PropTypes.any
  };

  return Dumb;
}
