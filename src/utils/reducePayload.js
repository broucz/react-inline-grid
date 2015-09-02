import getIn from 'lodash/object/get';
import { PAYLOAD_CONTEXT, SCREEN, PAYLOAD_LIST } from '../constants';

export default function reducePayload({ payload, reference }) {
  const screen = getIn(payload, [PAYLOAD_CONTEXT, SCREEN]);

  return payload[PAYLOAD_LIST].reduce((acc, current) => {
    return {
      ...acc,
      ...getIn(reference, [screen, ...current])
    };
  }, {});
}
