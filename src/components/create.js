import createGrid from './createGrid';
import createSmart from './createSmart';
import { ROW, CELL } from '../constants';

export function createProvider(...args) {
  return createGrid(...args);
}

export function createComponent(...args) {
  const Row = createSmart(...args, ROW);
  const Cell = createSmart(...args, CELL);

  return { Row, Cell };
}
