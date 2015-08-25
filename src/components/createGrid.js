import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import store from '../store';
import createContext from './createContext';
import { DEFAULT_SCREEN_OPTIONS } from '../constants';

export default function grid(React) {
  const { Component, PropTypes } = React;
  const Context = createContext(React);

  class Grid extends Component {
    render() {
      const { options, children, ...clean } = this.props;
      const o = fromJS((options || DEFAULT_SCREEN_OPTIONS));

      return (
        <Provider store={store(fromJS(o))}>
          <div>
            <Context options={o} {...clean}/>
            {children}
          </div>
        </Provider>
      );
    }
  }

  Grid.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      gutter: PropTypes.number,
      margin: PropTypes.number,
      columns: PropTypes.number,
      order: PropTypes.number.isRequired,
      query: PropTypes.string.isRequired
    })),
    children: PropTypes.any
  };

  return Grid;
}
