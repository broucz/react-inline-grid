import compact from 'lodash/array/compact';
import { SCREEN, PAYLOAD_CONTEXT, PAYLOAD_LIST } from '../constants';

function reduceList(context, list = []) {
  const screen = context[SCREEN];
  return compact(list.map(n => {
    const [ entry, ...value ] = n.split('-');

    switch (value.length) {
    case 0:
      return entry;
    case 1:
      if (entry === 'offset') {
        return [entry, ...value];
      }
      if (entry !== screen) return false;
      return value[0];
    case 2:
      if (entry !== screen) return false;
      if (value[0] === 'offset') {
        return value;
      }
      return false;
    default:
      return false;
    }
  }));
}

/**
 * Return an object containing `current` screen `name`
 * as first value and global (as named) or named and matching value(s).
 *
 * context = { screen: 'phone' }
 * list = ['cell', 'middle', 'tablet-3', 'phone-2']
 *
 * return {
 *  context: { screen: 'phone' },
 *  list: [
 *    'cell',
 *    'middle',
 *    '2'
 *  ]
 * }
 *
 * @param {Object} context
 * @param {Array} list
 * @returns {Object}
 */
export default function generatePayload(context, list) {
  return {
    [PAYLOAD_CONTEXT]: context,
    [PAYLOAD_LIST]: reduceList(context, list)
  };
}
