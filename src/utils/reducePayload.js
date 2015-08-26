import { Seq, Map } from 'immutable';
import { PAYLOAD_CONTEXT, SCREEN, PAYLOAD_LIST } from '../constants';

export default function reducePayload(payload, reference) {
  const screen = payload.getIn([PAYLOAD_CONTEXT, SCREEN]);
  const list = payload.get(PAYLOAD_LIST);

  return new Seq(list)
    .reduce((obj, n) => {
      return obj.merge(reference.getIn([screen, ...n]));
    }, new Map);
}
