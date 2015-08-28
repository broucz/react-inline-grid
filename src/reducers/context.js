import { UPDATE_CONTEXT_SCREEN, SCREEN } from '../constants';

export default function context(state = {}, action = {}) {
  switch (action.type) {
  case UPDATE_CONTEXT_SCREEN:
    return {
      ...state,
      [SCREEN]: action.payload
    };
  default:
    return state;
  }
}
