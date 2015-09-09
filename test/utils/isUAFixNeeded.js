import expect from 'expect';
import isUAFixNeeded from '../../src/utils/isUAFixNeeded';

describe('Utils', () => {
  describe('isUAFixNeeded(userAgent)', () => {
    it(`not needed`, () => {
      const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36';
      const v = isUAFixNeeded(UA);
      expect(v).toBe(false);
    });

    it(`needed`, () => {
      const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4';
      const v = isUAFixNeeded(UA);
      expect(v).toBe(true);
    });
  });
});
