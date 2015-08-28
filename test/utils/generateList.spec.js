import expect from 'expect';
import generateList from '../../src/utils/generateList';

const tag = '<component tag>';

describe('Utils', () => {
  describe('generateList', () => {
    it(`should return a List with only ${tag} as value if <input> is missing or invalid`, () => {
      const v = generateList(tag);
      expect(v).toEqual([tag]);

      const v2 = generateList(tag, '');
      expect(v2).toEqual([tag]);

      const v3 = generateList(tag, '  ');
      expect(v3).toEqual([tag]);

      const v4 = generateList(tag, null);
      expect(v4).toEqual([tag]);
    });


    it(`should return a List containing ${tag} as first value and <input> value(s)`, () => {
      const v1 = generateList(tag, 'prop-1');
      expect(v1).toEqual([tag, 'prop-1']);

      const v2 = generateList(tag, 'prop-1 prop-2');
      expect(v2).toEqual([tag, 'prop-1', 'prop-2']);

      const v3 = generateList(tag, ' prop-1   prop-2 ');
      expect(v3).toEqual([tag, 'prop-1', 'prop-2']);
    });
  });
});
