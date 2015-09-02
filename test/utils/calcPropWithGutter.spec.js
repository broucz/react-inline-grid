import expect from 'expect';
import calcPropWithGutter from '../../src/utils/calcPropWithGutter';

describe('Utils', () => {
  describe('calcPropWithGutter', () => {
    it(`should generate a property w/ partial value`, () => {
      const v = calcPropWithGutter([1, 2, 20], 'a');
      expect(v).toEqual({ '1': { a: 'calc(50% - 20px)' } });
    });

    it(`should generate a property w/ full value`, () => {
      const v = calcPropWithGutter([1, 2, 20], 'a', true);
      expect(v).toEqual({ '1': { a: 'calc(100% - 20px)' } });
    });
  });
});
