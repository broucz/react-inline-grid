export default function fixUserAgent(isWebKitNeeded, rowRoot) {
  const justifyContent =
    isWebKitNeeded
      ? 'WebkitJustifyContent'
      : 'justifyContent';

  const alignSelf =
    isWebKitNeeded
      ? 'WebkitAlignSelf'
      : 'alignSelf';

  const UA_ROW =
    isWebKitNeeded
      ? rowRoot.withMutations(row => {
        row
          .set('display', '-webkit-flex')
          .set('WebkitFlexFlow', 'row wrap')
          .set('WebkitAlignItems', 'stretch');
      })
      : rowRoot;

  return {
    justifyContent,
    alignSelf,
    UA_ROW
  };
}
