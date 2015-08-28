import expect from 'expect';
import generatePayload from '../../src/utils/generatePayload';
import { PAYLOAD_CONTEXT, PAYLOAD_LIST, SCREEN } from '../../src/constants';

const context = { [SCREEN]: 'phone'};

describe('Utils', () => {
  describe('generatePayload', () => {
    it('should keep <context>', () => {
      const expected = context;
      const v = generatePayload(context);
      expect(v[PAYLOAD_CONTEXT]).toEqual(expected);
    });

    it('should handle empty <list>', () => {
      const expected = [];
      const v = generatePayload(context);
      expect(v[PAYLOAD_LIST]).toEqual(expected);
    });

    it('should handle global value(s)', () => {
      const list = ['a', 'b', 'c'];
      const expected = ['a', 'b', 'c'];
      const v = generatePayload(context, list);
      expect(v[PAYLOAD_LIST]).toEqual(expected);
    });

    it('should handle global named value(s)', () => {
      const list = ['a', 'b', 'offset-2'];
      const expected = ['a', 'b', ['offset', '2']];
      const v = generatePayload(context, list);
      expect(v[PAYLOAD_LIST]).toEqual(expected);
    });

    it('should ignore non matching value(s)', () => {
      const list = ['a', 'b', 'fail-c'];
      const expected = ['a', 'b'];
      const v = generatePayload(context, list);
      expect(v[PAYLOAD_LIST]).toEqual(expected);
    });

    it('should keep matching value(s)', () => {
      const list = ['a', 'phone-b', 'c'];
      const expected = ['a', 'b', 'c'];
      const v = generatePayload(context, list);
      expect(v[PAYLOAD_LIST]).toEqual(expected);
    });

    it('should ignore non matching named value(s)', () => {
      const list = ['a', 'b', 'fail-offset-2'];
      const expected = ['a', 'b'];
      const v = generatePayload(context, list);
      expect(v[PAYLOAD_LIST]).toEqual(expected);
    });

    it('should keep matching named value(s)', () => {
      const list = ['a', 'b', 'phone-offset-2'];
      const expected = ['a', 'b', ['offset', '2']];
      const v = generatePayload(context, list);
      expect(v[PAYLOAD_LIST]).toEqual(expected);
    });

    it(`should ignore invalid named value(s)`, () => {
      const list = ['a', 'b', 'phone-fail-2'];
      const expected = ['a', 'b'];
      const v = generatePayload(context, list);
      expect(v[PAYLOAD_LIST]).toEqual(expected);
    });

    it(`should ignore invalid value(s)`, () => {
      const list = ['a', 'b', 'phone-offset-2-fail'];
      const expected = ['a', 'b'];
      const v = generatePayload(context, list);
      expect(v[PAYLOAD_LIST]).toEqual(expected);
    });
  });
});
