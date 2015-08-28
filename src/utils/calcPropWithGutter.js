import range from 'lodash/utility/range';

export default function calcPropWithGutter([start, end, gutter], prop, isFull) {
  return range(start, end).reduce((acc, n) => {
    const width = (isFull) ? 100 : (n / end) * 100;
    acc[n] = {
      [prop]: `calc(${width}% - ${gutter}px)`
    };
    return acc;
  }, {});
}
