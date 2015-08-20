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

// TODO: this is not really readable and opti.
export default function generateStyle(options) {
  const initial = new Map();

  const bigger = options.maxBy(n => n.get('order'));
  const smaller = options.minBy(n => n.get('order'));

  return initial.withMutations(container => {
    return options.map(screen => {
      const name = screen.get('name');
      const gutter = screen.get('gutter') || 0;
      const margin = screen.get('margin') || 0;
      const columns = screen.get('columns');

      // Define `row`
      container.setIn([name, ROW], ROW_ROOT);
      container.setIn([name, ROW, 'padding'], `${margin - (gutter / 2)}px`);

      // Define `cell`
      container.setIn([name, CELL], CELL_ROOT);
      container.setIn([name, CELL, 'margin'], `${gutter / 2}px`);
      container.setIn(
        [name, CELL, 'width'],
        partialSize(smaller.get('columns'), columns, gutter)
      );

      // ROW
      container.setIn([name, 'start', 'justifyContent'], `flex-start`);
      container.setIn([name, 'center', 'justifyContent'], `center`);
      container.setIn([name, 'end', 'justifyContent'], `flex-end`);
      container.setIn([name, 'around', 'justifyContent'], `space-around`);
      container.setIn([name, 'between', 'justifyContent'], `space-between`);

      // CELL
      container.setIn([name, 'top', 'alignSelf'], `flex-start`);
      container.setIn([name, 'middle', 'alignSelf'], `center`);
      container.setIn([name, 'bottom', 'alignSelf'], `flex-end`);
      container.setIn([name, 'stretch', 'alignSelf'], `stretch`);


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
