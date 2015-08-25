import { List } from 'immutable';

/**
 * Return an Immutable List with component `tag` as first
 * entry following buy `input` values separated by whitespace.
 *
 * tag = 'cell'
 * input = '6 phone-2'
 *
 * return List['cell', '6', 'phone-2']
 *
 * @param {String} tag
 * @param {String} input
 * @returns {List}
 */
export default function generateList(tag, input) {
  if (input && input.trim()) {
    const clean = List.of(...input.trim().split(/\s+/));
    return clean.unshift(tag);
  }
  return new List([tag]);
}
