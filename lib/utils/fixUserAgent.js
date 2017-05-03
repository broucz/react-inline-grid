'use strict';

exports.__esModule = true;
exports['default'] = fixUserAgent;

function fixUserAgent(rowRoot, needFix) {
  var justifyContent = needFix ? 'WebkitJustifyContent' : 'justifyContent';

  var alignSelf = needFix ? 'WebkitAlignSelf' : 'alignSelf';

  var FIXED_ROW = needFix ? {
    display: '-webkit-flex',
    WebkitFlexFlow: 'row wrap',
    WebkitAlignItems: 'stretch'
  } : rowRoot;

  return {
    justifyContent: justifyContent,
    alignSelf: alignSelf,
    FIXED_ROW: FIXED_ROW
  };
}

module.exports = exports['default'];