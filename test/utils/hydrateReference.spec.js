import { fromJS } from 'immutable';
import expect from 'expect';
import hydrateReference from '../../src/utils/hydrateReference';
import { DEFAULT_SCREEN_OPTIONS } from '../../src/constants';

function isWebKitNeeded() {
  return true;
}

const options = fromJS(DEFAULT_SCREEN_OPTIONS);

describe('Utils', () => {
  describe('hydrateReference', () => {
    it(`TODO: should be done...`, () => {
      const v = hydrateReference(options, isWebKitNeeded);
      // console.log('v', v);
      expect(true).toBe(true);
    });
  });
});
