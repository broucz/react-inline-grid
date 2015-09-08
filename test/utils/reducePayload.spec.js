import expect from 'expect';
import reducePayload from '../../src/utils/reducePayload';

const reference = {
  phone: {
    tag: { propTag: 'tag' },
    a: { propA: 'A' },
    b: { inner: { propB: 'B' } }
  }
};

describe('Utils', () => {
  describe('reducePayload', () => {
    it(`should merge corresponding values`, () => {
      const o = {
        name: 'phone',
        list: ['tag', 'a', ['b', 'inner']]
      };
      const v = reducePayload(o, reference);
      const expected = {
        propTag: 'tag',
        propA: 'A',
        propB: 'B'
      };
      expect(v).toEqual(expected);
    });
  });
});
