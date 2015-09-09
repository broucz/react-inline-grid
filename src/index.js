import { ROW_ID, CELL_ID } from './constants';
import createComponent from './components/createComponent';

export { default as Grid } from './components/Grid';

const Row = createComponent(ROW_ID);
const Cell = createComponent(CELL_ID);

export {
  Row,
  Cell
};
