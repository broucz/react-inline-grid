import { Map } from 'immutable';
import { UPDATE_CONTEXT_SCREEN, SCREEN } from '../constants';

export default function context(state = new Map, action = {}) {
  switch (action.type) {
  case UPDATE_CONTEXT_SCREEN:
    return state.set(SCREEN, action.payload);
  default:
    return state;
  }
}
