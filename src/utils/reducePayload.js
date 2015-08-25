import { Seq, Map } from 'immutable';
import { PAYLOAD_LIST } from '../constants';

export default function reducePayload(payload, reference) {
  const list = payload.get(PAYLOAD_LIST);

  return new Seq(list)
    .reduce((obj, n) => {
      return obj.merge(reference.getIn(n));
    }, new Map);
}
