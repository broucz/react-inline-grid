import { OrderedSet, Seq, Map } from 'immutable';
import { SCREEN, PAYLOAD_CONTEXT, PAYLOAD_LIST } from '../constants';

function reduceList(context, list) {
  const screen = context.get(SCREEN);

  const payload = new Seq(list)
    .reduce((acc, n) => {
      const [ entry, ...value ] = n.split('-');

      switch (value.length) {
      case 0:
        return acc.add(entry);
      case 1:
        if (entry !== screen) return acc;
        return acc.add(...value);
      default:
        return acc;
      }
    }, new OrderedSet);

  return payload;
}

/**
 * Return an Immutable Map containing `current` screen `name`
 * as first value and global (as named) or named and matching value(s).
 *
 * context = Map{ screen: 'phone' }
 * list = List['cell', 'middle', 'tablet-3', 'phone-2']
 *
 * return Map{
 *  context: Map{ screen: 'phone' },
 *  list: List[
 *    'cell',
 *    'middle',
 *    '2'
 *  ]
 * }
 *
 * @param {Map} context
 * @param {List} list
 * @returns {Map}
 */
export default function generatePayload(context, list) {
  return new Map({
    [PAYLOAD_CONTEXT]: context,
    [PAYLOAD_LIST]: reduceList(context, list)
  });
}
