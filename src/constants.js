export const UPDATE_MEDIA_NAME = 'media/name/UPDATE';
export const ROW = 'row';
export const CELL = 'cell';
export const DEFAULT_MEDIA_OPTIONS = {
  columns: 12,
  gutter: 16,
  margin: 16,
  deaf: false,
  list: [
    {
      name: 'phone',
      query: '(max-width: 479px)'
    },
    {
      name: 'tablet',
      query: '(min-width: 480px) and (max-width: 839px)'
    },
    {
      name: 'desktop',
      query: '(min-width: 840px)'
    }
  ]
};
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
