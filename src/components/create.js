import createSmart from './createSmart';
import { ROW, CELL } from '../constants';

export default function create() {
  const Row = createSmart(ROW);
  const Cell = createSmart(CELL);

  return { Row, Cell };
}
