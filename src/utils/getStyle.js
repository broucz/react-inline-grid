import generateList from './generateList';
import generatePayload from './generatePayload';
import reducePayload from './reducePayload';
import memoize from './memoize';
import invariant from './invariant';
import capitalize from './capitalize';
import { WHITE_LIST } from '../constants';

export function getInReference(tag, grid) {
  const { media, reference, is } = grid;
  const payload =
    generatePayload(
      media,
      generateList(tag, is)
    );

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
}

export const processStyle = (tag, grid) => memoize(() => {
  return getInReference(tag, grid);
});

export default function getStyle(tag, grid) {
  const { media, is } = grid;
  const key = `${media.name}${tag}${is}`;
  return processStyle(tag, grid)(key);
}
