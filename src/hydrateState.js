import { Map } from 'immutable';
import generateStyle from './utils/generateStyle';
import { SCREEN } from './constants';

export function hydrateContext(options) {
  return new Map({
    [SCREEN]:
      options
        .filter(n => window.matchMedia(n.get('query')).matches)
        .first()
        .get('name')
  });
}

export function hydrateReference(options) {
  return generateStyle(options);
}
