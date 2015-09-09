import expect from 'expect';
import invariant from '../../src/utils/invariant';

describe('Utils', () => {
  describe('invariant(condition, error)', () => {
    it(`should throw invariant -> error if !invariant -> condition`, () => {
      expect(() => {
        invariant(false, 'error text');
      }).toThrow('error text');
    });
  });
});
