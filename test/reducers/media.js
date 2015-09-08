import expect from 'expect';
import media, { updateMediaName, hydrateMedia } from '../../src/reducers/media';
import { UPDATE_MEDIA_NAME } from '../../src/constants';

describe('Reducers', () => {
  describe('media helpers', () => {
    it('should hydrateMedia', () => {
      const v = { name: 'a' };
      const expected = { name: 'a' };
      expect(hydrateMedia(v)).toEqual(expected);
    });

    it('should generate an action to update media name', () => {
      const v = 'a';
      const expected = {
        type: UPDATE_MEDIA_NAME,
        payload: v
      };
      expect(updateMediaName(v)).toEqual(expected);
    });
  });

  describe('media', () => {
    it('should return the initial state', () => {
      expect(
        media(undefined, undefined)
      ).toEqual({});
    });

    it('should handle UPDATE_MEDIA_NAME', () => {
      expect(
        media({ name: 'a' }, {
          type: UPDATE_MEDIA_NAME,
          payload: 'b'
        })
      ).toEqual({ name: 'b' });
    });

    it('should handle wrong action.type', () => {
      expect(
        media({ name: 'a' }, {
          type: 'fail',
          payload: 'b'
        })
      ).toEqual({ name: 'a' });
    });
  });
});
