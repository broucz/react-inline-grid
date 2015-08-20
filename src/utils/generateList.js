import { fromJS, List } from 'immutable';

/**
 * tag = 'col'
 * input = '6 phone-2'
 *
 * output = ['col', '6', 'phone-2']
 */
export default function generateList(tag, schema) {
  if (schema && schema.trim()) {
    const clean = fromJS(schema.trim().split(' '));
    return clean.unshift(tag);
  }
  return new List([tag]);
}
