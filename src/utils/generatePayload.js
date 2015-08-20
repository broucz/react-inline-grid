import { OrderedSet, Seq, Map } from 'immutable';
import { PAYLOAD_SCREEN, PAYLOAD_LIST } from '../constants';

/**
 * list = List['col', '2', 'middle', 'desktop-6', 'tablet-4']
 * current = 'phone'
 *
 * output = OrderedSet['col', 'middle', ['phone', '2']]
 */
function reduceList(list, screen) {
  const payload = new Seq(list)
    .reduce((obj, n) => {
      const [ entry, ...value ] = n.split('-');

      switch (value.length) {
      case 0:
        if (isNaN(entry)) {
          return obj.add(entry);
        }
        return obj.add([screen, entry]);
      case 1:
        if (entry !== screen) return obj;
        return obj.add([entry, ...value]);
      default:
        return obj;
      }
    }, new OrderedSet);

  return payload;
}

export default function generatePayload(list, screen) {
  return new Map({
    [PAYLOAD_SCREEN]: screen,
    [PAYLOAD_LIST]: reduceList(list, screen)
  });
}
