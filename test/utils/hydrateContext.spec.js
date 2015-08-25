import { fromJS } from 'immutable';
import expect from 'expect';
import hydrateContext from '../../src/utils/hydrateContext';
import { DEFAULT_SCREEN_OPTIONS, SCREEN } from '../../src/constants';

function isMatching() {
  return { matches: true };
}

const options = fromJS(DEFAULT_SCREEN_OPTIONS);

describe('Utils', () => {
  describe('hydrateContext', () => {
    it(`should Map.${SCREEN} defined.`, () => {
      const v = hydrateContext(options, isMatching);
      expect(v.size).toBe(1);
      expect(v.get(SCREEN)).toEqual(options.first().get('name'));
    });
  });
});
