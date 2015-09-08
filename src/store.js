import { createStore, combineReducers } from 'redux';
import media, { hydrateMedia } from './reducers/media';
import reference from './reducers/reference';
import hydrateReference from './utils/hydrateReference';

export default function store(options) {
  return createStore(
    combineReducers({ media, reference }),
    {
      media: hydrateMedia(options.media),
      reference: hydrateReference(options.reference)
    }
  );
}
