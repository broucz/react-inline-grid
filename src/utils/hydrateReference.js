import { Map, List, Range } from 'immutable';
import fixUserAgent from './fixUserAgent';
import {
  ROW,
  CELL,
  ROW_WHITE_LIST,
  CELL_WHITE_LIST,
  ROW_ROOT,
  CELL_ROOT
} from '../constants';

// Mixins for width calculation.
function partialSize(size, columns, gutter) {
  return `calc(${(size / columns) * 100}% - ${gutter}px)`;
}
function fullSize(gutter) {
  return partialSize(1, 1, gutter);
}

export default function hydrateReference(options, isWebKitNeeded) {
  const initial = new Map();

  const bigger = options.maxBy(n => n.get('order'));
  const smaller = options.minBy(n => n.get('order'));

  const {
    justifyContent,
    alignSelf,
    UA_ROW
    } = fixUserAgent(isWebKitNeeded, ROW_ROOT);

  return initial.withMutations(container => {
    container
      .setIn([ROW_WHITE_LIST], List.of(
        'row',
        'start',
        'center',
        'end',
        'around',
        'between',
        'nospace'
      ))
      .setIn([CELL_WHITE_LIST], List.of(
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
        'nospace'
      ));

    options.forEach(screen => {
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

        // COMMON
        .setIn([name, 'nospace'], {padding: 0, margin: 0})

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
