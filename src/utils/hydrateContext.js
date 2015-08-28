import getIn from 'lodash/object/get';
import { SCREEN } from '../constants';

export default function hydrateContext(options, isMatching) {
  return {
    [SCREEN]: getIn(
      options.filter(n => isMatching(n.query).matches)[0],
      'name'
    )
  };
}
