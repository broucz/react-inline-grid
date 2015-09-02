/**
 * Return an array with component `tag` as first
 * entry following buy `input` values separated by whitespace.
 *
 * tag = 'cell'
 * input = '6 phone-2'
 *
 * return ['cell', '6', 'phone-2']
 *
 * @param {String} tag
 * @param {String} input
 * @returns {Array}
 */
export default function generateList(tag, input) {
  if (input && input.trim()) {
    return [tag, ...input.trim().split(/\s+/)];
  }
  return [tag];
}
