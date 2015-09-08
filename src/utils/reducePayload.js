import getIn from 'lodash/object/get';

export default function reducePayload({ name, list }, reference) {
  return list.reduce((acc, current) => {
    const style = getIn(reference, [name, ...current]);
    return {
      ...acc,
      ...style
    };
  }, {});
}
