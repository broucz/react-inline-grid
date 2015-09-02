import expect from 'expect';
import { updateContextScreen } from '../../src/actions';
import { UPDATE_CONTEXT_SCREEN } from '../../src/constants';

describe('Actions', () => {
  describe('updateContextScreen', () => {
    it('should generate an action to update screen context', () => {
      const payload = 'scree-name';
      const expected = {
        type: UPDATE_CONTEXT_SCREEN,
        payload
      };
      expect(updateContextScreen(payload)).toEqual(expected);
    });
  });
});
