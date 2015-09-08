import expect from 'expect';
import generatePayload from '../../src/utils/generatePayload';

const media = { name: 'phone'};

describe('Utils', () => {
  describe('generatePayload', () => {
    it('should keep media.name and handle empty media.list', () => {
      const v = generatePayload(media);
      const expected = {
        name: media.name,
        list: []
      };
      expect(v).toEqual(expected);
    });

    it('should handle global value(s)', () => {
      const list = ['a', 'b', 'c'];
      const expected = ['a', 'b', 'c'];
      const v = generatePayload(media, list);
      expect(v.list).toEqual(expected);
    });

    it('should handle global named value(s)', () => {
      const list = ['a', 'b', 'offset-2'];
      const expected = ['a', 'b', ['offset', '2']];
      const v = generatePayload(media, list);
      expect(v.list).toEqual(expected);
    });

    it('should ignore non matching value(s)', () => {
      const list = ['a', 'b', 'fail-c'];
      const expected = ['a', 'b'];
      const v = generatePayload(media, list);
      expect(v.list).toEqual(expected);
    });

    it('should keep matching value(s)', () => {
      const list = ['a', 'phone-b', 'c'];
      const expected = ['a', 'b', 'c'];
      const v = generatePayload(media, list);
      expect(v.list).toEqual(expected);
    });

    it('should ignore non matching named value(s)', () => {
      const list = ['a', 'b', 'fail-offset-2'];
      const expected = ['a', 'b'];
      const v = generatePayload(media, list);
      expect(v.list).toEqual(expected);
    });

    it('should keep matching named value(s)', () => {
      const list = ['a', 'b', 'phone-offset-2'];
      const expected = ['a', 'b', ['offset', '2']];
      const v = generatePayload(media, list);
      expect(v.list).toEqual(expected);
    });

    it(`should ignore invalid named value(s)`, () => {
      const list = ['a', 'b', 'phone-fail-2'];
      const expected = ['a', 'b'];
      const v = generatePayload(media, list);
      expect(v.list).toEqual(expected);
    });

    it(`should ignore invalid value(s)`, () => {
      const list = ['a', 'b', 'phone-offset-2-fail'];
      const expected = ['a', 'b'];
      const v = generatePayload(media, list);
      expect(v.list).toEqual(expected);
    });
  });
});
