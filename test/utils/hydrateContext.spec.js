import expect from 'expect';
import hydrateContext from '../../src/utils/hydrateContext';
import { DEFAULT_SCREEN_OPTIONS, SCREEN } from '../../src/constants';

function isMatching() {
  return { matches: true };
}

const options = DEFAULT_SCREEN_OPTIONS;

describe('Utils', () => {
  describe('hydrateContext', () => {
    it(`should context ${SCREEN} defined.`, () => {
      const expected = { [SCREEN]: 'desktop' };
      const v = hydrateContext(options, isMatching);
      expect(v).toEqual(expected);
    });
  });
});
