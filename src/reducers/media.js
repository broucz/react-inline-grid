import { UPDATE_MEDIA_NAME } from '../constants';

export function hydrateMedia({ name }) {
  return {
    name
  };
}

export function updateMediaName(payload) {
  return {
    type: UPDATE_MEDIA_NAME,
    payload
  };
}

export default function media(state = {}, action = {}) {
  switch (action.type) {
  case UPDATE_MEDIA_NAME:
    return {
      ...state,
      name: action.payload
    };
  default:
    return state;
  }
}
