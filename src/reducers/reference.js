import isUAFixNeeded from '../utils/isUAFixNeeded';
import fixUserAgent from '../utils/fixUserAgent';
import calcPropWithGutter from '../utils/calcPropWithGutter';
import { ROW_ID, CELL_ID } from '../constants';

const ROW_ROOT = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'stretch'
};

export const buildRow = (id, FIXED_ROW, gutter, margin) => {
  return {
    [id]: {
      ...FIXED_ROW,
      padding: `${margin - (gutter / 2)}px`
    }
  };
};

export const buildRowTypeProperties = (justifyContent) => {
  return {
    start: { [justifyContent]: 'flex-start' },
    center: { [justifyContent]: 'center' },
    end: { [justifyContent]: 'flex-end' },
    around: { [justifyContent]: 'space-around' },
    between: { [justifyContent]: 'space-between' }
  };
};

export const buildCell = (id, gutter) => {
  return {
    [id]: {
      boxSizing: 'border-box',
      margin: `${gutter / 2}px`,
      width: `calc(100% - ${gutter}px)`
    }
  };
};

export const buildCellTypeProperties = (alignSelf) => {
  return {
    top: { [alignSelf]: 'flex-start' },
    middle: { [alignSelf]: 'center' },
    bottom: { [alignSelf]: 'flex-end' },
    stretch: { [alignSelf]: 'stretch' }
  };
};

export const buildSharedProperties = () => {
  return {
    nospace: { padding: 0, margin: 0 }
  };
};

export function hydrateReference({ options }) {
  const { columns, list } = options;
  const size = list.length;

  return list.reduce((acc, current, i) => {
    const { name, gutter, margin } = current;

    const {
      justifyContent,
      alignSelf,
      FIXED_ROW
    } = fixUserAgent(ROW_ROOT, isUAFixNeeded(navigator.userAgent));

    // 4
    // 8
    // 12
    const localColumns = (columns / size) * (i + 1);

    // Define partial sizes for columnNumber < totalColumns.
    const partialWidth =
      calcPropWithGutter(
        [1, localColumns, gutter],
        'width'
      );

    // Define sizes = 100% for everything else.
    const fullWidth =
      calcPropWithGutter(
        [localColumns, columns + 1, gutter],
        'width',
        true
      );

    // Define offset sizes.
    const offset =
      calcPropWithGutter(
        [0, localColumns, gutter / 2],
        'marginLeft'
      );

    const row = buildRow(ROW_ID, FIXED_ROW, gutter, margin);
    const rowTypeProperties = buildRowTypeProperties(justifyContent);

    const cell = buildCell(CELL_ID, gutter);
    const cellTypeProperties = buildCellTypeProperties(alignSelf);

    const sharedProperties = buildSharedProperties();

    return {
      ...acc,
      [name]: {
        ...row,
        ...rowTypeProperties,
        ...cell,
        ...cellTypeProperties,
        ...partialWidth,
        ...fullWidth,
        ...sharedProperties,
        offset: { ...offset }
      }
    };
  }, {});
}

export default function reference(state = {}) {
  return state;
}
