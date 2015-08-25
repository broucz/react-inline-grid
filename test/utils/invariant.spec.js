import expect from 'expect';
import invariant from '../../src/utils/invariant';

describe('Utils', () => {
  describe('invariant', () => {
    it(`should throw if !<condition>`, () => {
      expect(() => {
        invariant(false, 'error text');
      }).toThrow('error text');
    });
  });
});
