import expect from 'expect';
import {
  parser,
  listReducer,
  generatePayload,
  reducePayload,
  generateKey
} from '../../src/utils/pick';

describe('Utils', () => {
  describe('pick helpers', () => {
    describe('parser(initial, input)', () => {
      it('should return an array of parser -> initial if parser -> input is missing or invalid', () => {
        const v = parser('a');
        expect(v).toEqual(['a']);

        const v2 = parser('a', ' ');
        expect(v2).toEqual(['a']);
      });

      it('should handle parser -> input patterns', () => {
        const v1 = parser('a', 'prop-1');
        expect(v1).toEqual(['a', 'prop-1']);

        const v2 = parser('a', 'prop-1 prop-2');
        expect(v2).toEqual(['a', 'prop-1', 'prop-2']);

        const v3 = parser('a', ' prop-1   prop-2 ');
        expect(v3).toEqual(['a', 'prop-1', 'prop-2']);
      });
    });

    describe('listReducer(name, list = [])', () => {
      it('should handle empty listReducer -> list', () => {
        const v = listReducer();
        const expected = [];
        expect(v).toEqual(expected);
      });

      it('should handle global listReducer -> list -> value', () => {
        const v = listReducer(undefined, ['a', 'b', 'c']);
        const expected = ['a', 'b', 'c'];
        expect(v).toEqual(expected);
      });

      it('should handle global named listReducer -> list -> value', () => {
        const v = listReducer(undefined, ['a', 'b', 'offset-c']);
        const expected = ['a', 'b', ['offset', 'c']];
        expect(v).toEqual(expected);
      });

      it('should ignore non matching listReducer -> list -> value', () => {
        const v = listReducer('phone', ['a', 'b', 'fail-c']);
        const expected = ['a', 'b'];
        expect(v).toEqual(expected);
      });

      it('should keep matching listReducer -> list -> value', () => {
        const v = listReducer('phone', ['a', 'b', 'phone-c']);
        const expected = ['a', 'b', 'c'];
        expect(v).toEqual(expected);
      });

      it('should ignore non matching named listReducer -> list -> value', () => {
        const v = listReducer('phone', ['a', 'b', 'fail-offset-c']);
        const expected = ['a', 'b'];
        expect(v).toEqual(expected);
      });

      it('should keep matching named listReducer -> list -> value', () => {
        const v = listReducer('phone', ['a', 'b', 'phone-offset-c']);
        const expected = ['a', 'b', ['offset', 'c']];
        expect(v).toEqual(expected);
      });

      it('should ignore matching invalid named listReducer -> list -> value', () => {
        const v = listReducer('phone', ['a', 'b', 'phone-fail-c']);
        const expected = ['a', 'b'];
        expect(v).toEqual(expected);
      });

      it('should ignore other invalid listReducer -> list -> value', () => {
        const v = listReducer('phone', ['a', 'b', 'phone-offset-c-fail']);
        const expected = ['a', 'b'];
        expect(v).toEqual(expected);
      });
    });

    describe('generatePayload({ name }, list)', () => {
      it('should keep generatePayload -> name and parse generatePayload -> list', () => {
        const v = generatePayload({ name: 'a' });
        const expected = {
          name: 'a',
          list: []
        };
        expect(v).toEqual(expected);
      });
    });

    describe('reducePayload({ name, list }, reference)', () => {
      it('should keep generatePayload -> name and parse generatePayload -> list', () => {
        const reference = {
          phone: {
            a: { propA: 'A' },
            b: { propB: 'B' },
            c: { inner: { propC: 'C' } }
          }
        };
        const payload = {
          name: 'phone',
          list: ['a', 'b', ['c', 'inner']]
        };
        const v = reducePayload(payload, reference);
        const expected = {
          propA: 'A',
          propB: 'B',
          propC: 'C'
        };
        expect(v).toEqual(expected);
      });
    });

    describe('generateKey(tag, { media: { name }, is })', () => {
      it('should generate a key', () => {
        const v = generateKey('a', { media: { name: 'b' }, is: 'c' });
        const expected = 'abc';
        expect(v).toEqual(expected);
      });
    });
  });
});
