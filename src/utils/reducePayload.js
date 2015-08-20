import { Seq, Map } from 'immutable';
import { SCREEN, PAYLOAD_LIST } from '../constants';

export default function reducePayload(payload, reference) {
  const list = payload.get(PAYLOAD_LIST);
  const screen = payload.get(SCREEN);

  return new Seq(list)
    .reduce((obj, n) => {
      if (Array.isArray(n)) {
        return obj.merge(reference.getIn(n));
      }
      return obj.merge(reference.getIn([screen, n]));
    }, new Map);
}
