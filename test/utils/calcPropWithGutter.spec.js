import expect from 'expect';
import calcPropWithGutter from '../../src/utils/calcPropWithGutter';

describe('Utils', () => {
  describe('calcPropWithGutter([start, end, gutter], prop, isFull)', () => {
    it(`should generate partial style property if calcPropWithGutter -> isFull is missing or not true`, () => {
      const v = calcPropWithGutter([1, 2, 20], 'a');
      expect(v).toEqual({ '1': { a: 'calc(50% - 20px)' } });
    });

    it(`should generate full style property if calcPropWithGutter -> isFull is true`, () => {
      const v = calcPropWithGutter([1, 2, 20], 'a', true);
      expect(v).toEqual({ '1': { a: 'calc(100% - 20px)' } });
    });
  });
});
