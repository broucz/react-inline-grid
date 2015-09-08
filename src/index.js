import { ROW, CELL } from './constants';
import createComponent from './components/createComponent';

export { default as Grid } from './components/Grid';

const Row = createComponent(ROW);
const Cell = createComponent(CELL);

export {
  Row,
  Cell
};
