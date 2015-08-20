import React from 'react';
import {
  createProvider,
  createComponent
} from './components/create';

const Grid = createProvider(React);
const { Row, Cell } = createComponent(React);

export {
  Grid,
  Row,
  Cell
};
