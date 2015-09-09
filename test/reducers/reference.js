import expect from 'expect';
import reference, {
  buildRow,
  buildRowTypeProperties,
  buildCell,
  buildCellTypeProperties,
  sharedProperties
} from '../../src/reducers/reference';

describe('Reducers', () => {
  describe('reference helpers', () => {
    describe('buildRow(ROW_ID, FIXED_ROW, gutter, margin)', () => {
      it('should build a new row properties object', () => {
        const v = ['a', { b: 'B' }, 8, 16];
        const expected = {
          a: {
            b: 'B',
            padding: `${16 - (8 / 2)}px`
          }
        };
        expect(buildRow(...v)).toEqual(expected);
      });
    });

    describe('buildRowTypeProperties(justifyContent)', () => {
      it('should build new row type properties objects', () => {
        const v = ['a'];
        const expected = {
          start: { a: 'flex-start' },
          center: { a: 'center' },
          end: { a: 'flex-end' },
          around: { a: 'space-around' },
          between: { a: 'space-between' }
        };
        expect(buildRowTypeProperties(...v)).toEqual(expected);
      });
    });

    describe('buildCell(id, gutter)', () => {
      it('should build a new cell properties object', () => {
        const v = ['a', 8];
        const expected = {
          a: {
            boxSizing: 'border-box',
            margin: `${8 / 2}px`,
            width: `calc(100% - ${8}px)`
          }
        };
        expect(buildCell(...v)).toEqual(expected);
      });
    });

    describe('buildCellTypeProperties(alignSelf)', () => {
      it('should build new cell type properties objects', () => {
        const v = ['a'];
        const expected = {
          top: { a: 'flex-start' },
          middle: { a: 'center' },
          bottom: { a: 'flex-end' },
          stretch: { a: 'stretch' }
        };
        expect(buildCellTypeProperties(...v)).toEqual(expected);
      });
    });

    describe('sharedProperties()', () => {
      it('should build a new shared properties object', () => {
        const expected = {
          nospace: { padding: 0, margin: 0 }
        };
        expect(sharedProperties()).toEqual(expected);
      });
    });
  });

  describe('reference', () => {
    it('should return the initial state', () => {
      expect(
        reference(undefined, undefined)
      ).toEqual({});
    });

    it('should handle wrong action.type', () => {
      expect(
        reference({ name: 'a' }, {
          type: 'fail',
          payload: 'b'
        })
      ).toEqual({ name: 'a' });
    });
  });
});
