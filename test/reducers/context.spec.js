import expect from 'expect';
import context from '../../src/reducers/context';
import { UPDATE_CONTEXT_SCREEN, SCREEN } from '../../src/constants';

describe('Reducers', () => {
  describe('context', () => {
    it('should return the initial state', () => {
      expect(
        context(undefined, undefined)
      ).toEqual({});
    });

    it('should handle UPDATE_CONTEXT_SCREEN', () => {
      expect(
        context({ [SCREEN]: 'a' }, {
          type: UPDATE_CONTEXT_SCREEN,
          payload: 'b'
        })
      ).toEqual({ [SCREEN]: 'b' });
    });

    it('should handle wrong <type>', () => {
      expect(
        context({ [SCREEN]: 'a' }, {
          type: 'fail',
          payload: 'b'
        })
      ).toEqual({ [SCREEN]: 'a' });
    });
  });
});


