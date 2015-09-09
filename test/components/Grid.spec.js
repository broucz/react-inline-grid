import expect from 'expect';
import {
  ensureValue,
  ensureListProperties,
  build,
  setMedia,
  setReference
} from '../../src/components/Grid';
import { MEDIA_MODEL_HELPER } from '../../src/constants';

function buildModelFrom(options) {
  const { list } = options;
  return {
    columns: list.length * 4,
    deaf: false,
    list: ensureListProperties(undefined, options, list)
  };
}

describe('Components', () => {
  describe('Grid helpers', () => {
    describe('ensureValue(options, base, key, value)', () => {
      it('should return ensureValue -> value if valid and provided', () => {
        const v = ensureValue(undefined, { a: 12 }, 'a', 0);
        const expected = 0;
        expect(v).toEqual(expected);
      });

      it('should return ensureValue -> options -> key if valid and provided and if ensureValue -> value is invalid or missing', () => {
        const v = ensureValue({ a: 0 }, { a: 12 }, 'a', undefined);
        const expected = 0;
        expect(v).toEqual(expected);
      });

      it('should return ensureValue -> base -> key if ensureValue -> value and ensureValue -> options -> key are invalid or missing', () => {
        const v = ensureValue(undefined, { a: 12 }, 'a', undefined);
        const expected = 12;
        expect(v).toEqual(expected);
      });

      it('should throw if ensureValue -> key is missing', () => {
        expect(() => {
          ensureValue(undefined, undefined, undefined);
        }).toThrow(
          `Property 'key' of ensureValue() must be defined.`
        );
      });

      it('should throw if ensureValue -> base is missing', () => {
        expect(() => {
          ensureValue(undefined, undefined);
        }).toThrow(
          `Property 'base' of ensureValue() must be defined.`
        );
      });

      it('should throw if ensureValue -> key is not defined in ensureValue -> base -> key', () => {
        const key = 'a';
        expect(() => {
          ensureValue(undefined, { [key]: undefined }, key);
        }).toThrow(
          `Property '${key}' of ensureValue() -> base must be defined.`
        );
      });
    });

    describe('ensureListProperties(options, base, list)', () => {
      it('should return a new Model -> list from ensureListProperties -> list', () => {
        const list = [ { name: 'a', query: 'b' } ];
        const v = ensureListProperties(undefined, MEDIA_MODEL_HELPER, list);
        const expected = [{
          name: 'a',
          query: 'b',
          gutter: MEDIA_MODEL_HELPER.gutter,
          margin: MEDIA_MODEL_HELPER.margin
        }];
        expect(v).toEqual(expected);
      });
    });

    describe('build(options, base)', () => {
      it('should handle missing build -> options properties', () => {
        const v = build({}, MEDIA_MODEL_HELPER);
        const expected = buildModelFrom(MEDIA_MODEL_HELPER);
        expect(v).toEqual(expected);
      });

      it('should throw if build -> options -> list is defined and empty', () => {
        expect(() => {
          build({ list: [] }, MEDIA_MODEL_HELPER);
        }).toThrow(
          `Property 'list' of <Grid> -> 'options' can not be empty`
        );
      });

      it('should throw if build -> options -> columns is defined and wrong', () => {
        expect(() => {
          build({ columns: '11', list: ['a', 'b', 'c'] }, MEDIA_MODEL_HELPER);
        }).toThrow(
          `Property 'columns' of <Grid> -> 'options' must be a multiple of ` +
          `<Grid> -> 'options' -> 'list' -> length.`
        );
      });
    });

    describe('setMedia(name)', () => {
      it('should return a valid object', () => {
        const v = setMedia('a');
        const expected = { name: 'a' };
        expect(v).toEqual(expected);
      });
    });

    describe('setReference(options)', () => {
      it('should return a valid object', () => {
        const v = setReference('a');
        const expected = { options: 'a' };
        expect(v).toEqual(expected);
      });
    });
  });
});
