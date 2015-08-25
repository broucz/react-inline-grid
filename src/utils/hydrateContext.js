import { Map } from 'immutable';
import { SCREEN } from '../constants';

export default function hydrateContext(options, isMatching) {
  return new Map({
    [SCREEN]:
      options
        .filter(n => isMatching(n.get('query')).matches)
        .first()
        .get('name')
  });
}
