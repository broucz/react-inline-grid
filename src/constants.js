export const DEFAULT_SCREEN_OPTIONS = [
  {
    name: 'desktop',
    gutter: 16,
    margin: 16,
    columns: 12,
    bigger: true,
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
export const WHITE_LIST = {
  [ROW]: [
    'row',
    'start',
    'center',
    'end',
    'around',
    'between',
    'nospace'
  ],
  [CELL]: [
    'cell',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    'top',
    'middle',
    'bottom',
    'stretch',
    'between',
    'offset',
    'nospace'
  ]
};

export const SCREEN = 'screen';
export const CONTEXT = 'context';
export const PAYLOAD_CONTEXT = CONTEXT;
export const PAYLOAD_LIST = 'list';
export const UPDATE_CONTEXT_SCREEN = 'UPDATE_CONTEXT_SCREEN';
