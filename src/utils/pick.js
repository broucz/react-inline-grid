import compact from 'lodash/array/compact';
import getIn from 'lodash/object/get';
import memoize from './memoize';
import invariant from './invariant';
import capitalize from './capitalize';
import { WHITE_LIST } from '../constants';

export const parser = (initial, input) => {
  if (input && input.trim()) {
    return [initial, ...input.trim().split(/\s+/)];
  }
  return [initial];
};

export const listReducer = (name, list = []) => {
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
};

export const generatePayload = ({ name }, list) => {
  return {
    name,
    list: listReducer(name, list)
  };
};

export const reducePayload = ({ name, list }, reference) => {
  return list.reduce((acc, current) => {
    const style = getIn(reference, [name, ...current]);
    return {
      ...acc,
      ...style
    };
  }, {});
};

export const getInReference = (tag, { media, reference, is }) => {
  const list = parser(tag, is);
  const payload = generatePayload(media, list);

  if (process.env.NODE_ENV !== 'production') {
    payload.list.forEach(n => {
      const value = (Array.isArray(n)) ? n[0] : n;
      invariant(
        WHITE_LIST[tag].indexOf(value) > -1,
        `Property '${value}' is not allowed for <${capitalize(tag)}> component.`
      );
    });
  }

  return reducePayload(payload, reference);
};

export const memoizeProcess =
  (...arg) => memoize(() => getInReference(...arg));

export const generateKey =
  (tag, { media: { name }, is }) => `${tag}${name}${is}`;

export default function pick(...arg) {
  const key = generateKey(...arg);

  return memoizeProcess(...arg)(key);
}
