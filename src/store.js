import { createStore, combineReducers } from 'redux';
import media, { hydrateMedia } from './reducers/media';
import reference, { hydrateReference } from './reducers/reference';

export default function store(initialState) {
  return createStore(
    combineReducers({ media, reference }),
    {
      media: hydrateMedia(initialState.media),
      reference: hydrateReference(initialState.reference)
    }
  );
}
