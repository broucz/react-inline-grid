import { Map } from 'immutable';

export const DEFAULT_SCREEN_OPTIONS = [
  {
    name: 'desktop',
    gutter: 16,
    margin: 16,
    columns: 12,
    order: 2,
    query: '(min-width: 840px)'
  },
  {
    name: 'tablet',
    gutter: 16,
    margin: 16,
    columns: 8,
    order: 1,
    query: '(min-width: 480px) and (max-width: 839px)'
  },
  {
    name: 'phone',
    gutter: 16,
    margin: 16,
    columns: 4,
    order: 0,
    query: '(max-width: 479px)'
  }
];

export const ROW = 'row';
export const CELL = 'cell';
export const ROW_WHITE_LIST = 'ROW_WHITE_LIST';
export const CELL_WHITE_LIST = 'CELL_WHITE_LIST';

export const ROW_ROOT = new Map({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'stretch'
});

export const CELL_ROOT = new Map({
  boxSizing: 'border-box'
});

export const SCREEN = 'screen';
export const CONTEXT = 'context';
export const PAYLOAD_CONTEXT = CONTEXT;
export const PAYLOAD_LIST = 'list';
export const UPDATE_CONTEXT_SCREEN = 'UPDATE_CONTEXT_SCREEN';
