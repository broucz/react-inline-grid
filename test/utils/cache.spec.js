import expect from 'expect';
import cache from '../../src/utils/cache';

describe('Utils', () => {
  describe('cache', () => {
    it(`should be an empty object`, () => {
      expect(cache).toEqual({});
    });
  });
});
