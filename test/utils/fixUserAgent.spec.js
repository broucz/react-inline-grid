import expect from 'expect';
import fixUserAgent from '../../src/utils/fixUserAgent';

const base = {
  alignSelf: 'alignSelf',
  justifyContent: 'justifyContent',
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'stretch'
  }
};

const resultNotFixed = {
  alignSelf: 'alignSelf',
  justifyContent: 'justifyContent',
  FIXED_ROW: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'stretch'
  }
};

const resultFixed = {
  alignSelf: 'WebkitAlignSelf',
  justifyContent: 'WebkitJustifyContent',
  FIXED_ROW: {
    display: '-webkit-flex',
    WebkitFlexFlow: 'row wrap',
    WebkitAlignItems: 'stretch'
  }
};

describe('Utils', () => {
  describe('fixUserAgent', () => {
    it(`should not fix`, () => {
      const v = fixUserAgent(base.row, false);
      expect(v).toEqual(resultNotFixed);
    });

    it(`should fix`, () => {
      const v = fixUserAgent(base.row, true);
      expect(v).toEqual(resultFixed);
    });
  });
});
