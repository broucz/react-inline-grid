import fixUserAgent from './fixUserAgent';
import calcPropWithGutter from './calcPropWithGutter';
import { ROW, CELL } from '../constants';

const ROW_ROOT = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'stretch'
};

export default function hydrateReference(options, needFix) {
  const bigger = options[options.length - 1];

  const {
    justifyContent,
    alignSelf,
    FIXED_ROW
    } = fixUserAgent(ROW_ROOT, needFix);

  return options.reduce((acc, current) => {
    const { name, gutter, margin, columns } = current;

    // Define partial sizes for columnNumber < totalColumns.
    const partialWidth =
      calcPropWithGutter(
        [1, columns, gutter],
        'width'
      );

    // Define sizes = 100% for everything else.
    const fullWidth =
      calcPropWithGutter(
        [columns, bigger.columns + 1, gutter],
        'width',
        true
      );

    // Define offset sizes.
    const offset =
      calcPropWithGutter(
        [0, columns, gutter / 2],
        'marginLeft'
      );

    return {
      ...acc,
      [name]: {
        // Define `row`.
        [ROW]: {
          ...FIXED_ROW,
          padding: `${margin - (gutter / 2)}px`
        },

        // Define `cell`.
        [CELL]: {
          boxSizing: 'border-box',
          margin: `${gutter / 2}px`,
          width: `calc(100% - ${gutter}px)`
        },

        // Shared values.
        nospace: { padding: 0, margin: 0 },

        // Define <Row> properties.
        start: { [justifyContent]: 'flex-start' },
        center: { [justifyContent]: 'center' },
        end: { [justifyContent]: 'flex-end' },
        around: { [justifyContent]: 'space-around' },
        between: { [justifyContent]: 'space-between' },

        // Define <Cell> properties.
        top: { [alignSelf]: 'flex-start' },
        middle: { [alignSelf]: 'center' },
        bottom: { [alignSelf]: 'flex-end' },
        stretch: { [alignSelf]: 'stretch' },

        ...partialWidth,
        ...fullWidth,
        offset: { ...offset }
      }
    };
  }, {});
}
