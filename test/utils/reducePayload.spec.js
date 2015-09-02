import expect from 'expect';
import reducePayload from '../../src/utils/reducePayload';
import { PAYLOAD_CONTEXT, SCREEN, PAYLOAD_LIST } from '../../src/constants';

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
      const payload = {
        [PAYLOAD_CONTEXT]: { [SCREEN]: 'phone' },
        [PAYLOAD_LIST]: ['tag', 'a', ['b', 'inner']]
      };
      const expected = {
        propTag: 'tag',
        propA: 'A',
        propB: 'B'
      };
      const v = reducePayload({ payload, reference });
      expect(v).toEqual(expected);
    });
  });
});
