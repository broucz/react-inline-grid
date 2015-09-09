import expect from 'expect';
import capitalize from '../../src/utils/capitalize';

describe('Utils', () => {
  describe('capitalize(string)', () => {
    it(`should capitalize capitalize -> string`, () => {
      const v = capitalize('abc def');
      expect(v).toEqual('Abc def');
    });
  });
});
