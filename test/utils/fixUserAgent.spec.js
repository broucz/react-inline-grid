import expect from 'expect';
import fixUserAgent from '../../src/utils/fixUserAgent';
import { ROW_ROOT } from '../../src/constants';

describe('Utils', () => {
  describe('fixUserAgent', () => {
    it(`TODO: if needed -> should be done...`, () => {
      const v = fixUserAgent(true, ROW_ROOT);
      expect(true).toBe(true);
    });

    it(`TODO: if not needed -> should be done...`, () => {
      const v = fixUserAgent(false, ROW_ROOT);
      expect(true).toBe(true);
    });
  });
});
