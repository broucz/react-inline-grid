import { UPDATE_CONTEXT_SCREEN } from './constants';

export function updateContextScreen(payload) {
  return {
    type: UPDATE_CONTEXT_SCREEN,
    payload
  };
}
