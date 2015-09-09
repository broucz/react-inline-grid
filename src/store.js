import { createStore, combineReducers } from 'redux';
import media, { hydrateMedia } from './reducers/media';
import reference from './reducers/reference';
import hydrateReference from './utils/hydrateReference';

export default function store(initialState) {
  return createStore(
    combineReducers({ media, reference }),
    {
      media: hydrateMedia(initialState.media),
      reference: hydrateReference(initialState.reference)
    }
  );
}
