export default function fixUserAgent(rowRoot, needFix) {
  const justifyContent =
    needFix
      ? 'WebkitJustifyContent'
      : 'justifyContent';

  const alignSelf =
    needFix
      ? 'WebkitAlignSelf'
      : 'alignSelf';

  const FIXED_ROW =
    needFix
      ? {
        display: '-webkit-flex',
        WebkitFlexFlow: 'row wrap',
        WebkitAlignItems: 'stretch'
      }
      : rowRoot;

  return {
    justifyContent,
    alignSelf,
    FIXED_ROW
  };
}
