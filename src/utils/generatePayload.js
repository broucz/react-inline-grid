import compact from 'lodash/array/compact';

function reduceList(name, list = []) {
  return compact(list.map(n => {
    const [ entry, ...value ] = n.split('-');

    switch (value.length) {
    case 0:
      return entry;
    case 1:
      if (entry === 'offset') {
        return [entry, ...value];
      }
      if (entry !== name) return false;
      return value[0];
    case 2:
      if (entry !== name) return false;
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
 * media = { name: 'phone' }
 * list = ['cell', 'middle', 'tablet-3', 'phone-2']
 *
 * return {
 *  name: 'phone',
 *  list: [
 *    'cell',
 *    'middle',
 *    '2'
 *  ]
 * }
 *
 * @param {String} name
 * @param {Array} list
 * @returns {Object}
 */
export default function generatePayload({ name }, list) {
  return {
    name,
    list: reduceList(name, list)
  };
}
