export const UPDATE_MEDIA_NAME = 'media/name/UPDATE';
export const ROW_ID = 'row';
export const CELL_ID = 'cell';
export const MEDIA_MODEL_HELPER = {
  gutter: 16,
  margin: 16,
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
  [ROW_ID]: [
    'row',
    'start',
    'center',
    'end',
    'around',
    'between',
    'nospace'
  ],
  [CELL_ID]: [
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
