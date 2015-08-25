import { OrderedSet, Map } from 'immutable';
import expect from 'expect';
import reducePayload from '../../src/utils/reducePayload';
import { PAYLOAD_CONTEXT, SCREEN, PAYLOAD_LIST } from '../../src/constants';

const payload =
  new Map({
    [PAYLOAD_CONTEXT]: new Map({ [SCREEN]: 'phone'}),
    [PAYLOAD_LIST]:
      new OrderedSet()
        .add('2')
        .add('cell')
        .add('middle')
  });

const initial = new Map();

const reference =
  initial.withMutations(container => {
    container
      .setIn(['phone', '2'], { a: 'A'})
      .setIn(['phone', 'cell'], { b: 'B' })
      .setIn(['phone', 'middle'], { c: 'C' });
  });

describe('Utils', () => {
  describe('reducePayload', () => {
    it(`should return the corresponding values`, () => {
      const v = reducePayload(payload, reference);
      const expected =
        new Map()
          .set('a', 'A')
          .set('b', 'B')
          .set('c', 'C');
      expect(v.toArray()).toEqual(expected.toArray());
    });
  });
});
