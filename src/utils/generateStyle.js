import { Map, Range } from 'immutable';
import { ROW, CELL } from '../constants';

const ROW_ROOT = new Map({
  display: 'flex',
  flexFlow: 'row wrap',
  margin: '0 auto 0 auto',
  alignItems: 'stretch'
});

const CELL_ROOT = new Map({
  boxSizing: 'border-box'
});

// Mixins for width calculation.
function partialSize(size, columns, gutter) {
  return `calc(${(size / columns) * 100}% - ${gutter}px)`;
}

function fullSize(gutter) {
  return partialSize(1, 1, gutter);
}

// Add `-webkit` prefix when needed.
function fixUserAgent(userAgent, rowRoot) {
  const isWebKitNeeded =
    userAgent.indexOf('Chrome') < 0
    && userAgent.indexOf('Safari') > -1;

  const justifyContent =
    isWebKitNeeded
      ? 'WebkitJustifyContent'
      : 'justifyContent';

  const alignSelf =
    isWebKitNeeded
      ? 'WebkitAlignSelf'
      : 'alignSelf';

  const UA_ROW =
    isWebKitNeeded
      ? rowRoot.withMutations(row => {
        row
          .set('display', '-webkit-flex')
          .set('WebkitFlexFlow', 'row wrap')
          .set('WebkitAlignItems', 'stretch'); // TODO: needed ?
      })
      : rowRoot;

  return {
    justifyContent,
    alignSelf,
    UA_ROW
  };
}

// TODO: this is not really readable and opti.
export default function generateStyle(options) {
  const initial = new Map();

  const bigger = options.maxBy(n => n.get('order'));
  const smaller = options.minBy(n => n.get('order'));

  const {
    justifyContent,
    alignSelf,
    UA_ROW
  } = fixUserAgent(navigator.userAgent, ROW_ROOT);

  return initial.withMutations(container => {
    return options.map(screen => {
      const name = screen.get('name');
      const gutter = screen.get('gutter') || 0;
      const margin = screen.get('margin') || 0;
      const columns = screen.get('columns') || 12;

      container

        // Define `row`
        .setIn([name, ROW], UA_ROW)
        .setIn([name, ROW, 'padding'], `${margin - (gutter / 2)}px`)

        // Define `cell`
        .setIn([name, CELL], CELL_ROOT)
        .setIn([name, CELL, 'margin'], `${gutter / 2}px`)
        .setIn(
          [name, CELL, 'width'],
          partialSize(smaller.get('columns'), columns, gutter)
        )

        // ROW
        .setIn([name, 'start', justifyContent], `flex-start`)
        .setIn([name, 'center', justifyContent], `center`)
        .setIn([name, 'end', justifyContent], `flex-end`)
        .setIn([name, 'around', justifyContent], `space-around`)
        .setIn([name, 'between', justifyContent], `space-between`)

        // CELL
        .setIn([name, 'top', alignSelf], `flex-start`)
        .setIn([name, 'middle', alignSelf], `center`)
        .setIn([name, 'bottom', alignSelf], `flex-end`)
        .setIn([name, 'stretch', alignSelf], `stretch`);


      // Define partial sizes for columnNumber < totalColumns.
      new Range(1, columns)
        .toArray()
        .map(n => {
          container.setIn(
            [name, `${n}`, 'width'],
            partialSize(n, columns, gutter)
          );
        });

      // Define sizes = 100% for everything else.
      new Range(columns, bigger.get('columns') + 1)
        .toArray()
        .map(n => {
          container.setIn(
            [name, `${n}`, 'width'],
            fullSize(gutter)
          );
        });
    });
  });
}
