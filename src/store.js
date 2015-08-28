import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import hydrateContext from './utils/hydrateContext';
import hydrateReference from './utils/hydrateReference';
import isMatching from './utils/isMatching';
import isWebKitNeeded from './utils/isWebKitNeeded';

export default function store(options) {
  return createStore(
    combineReducers(reducers),
    {
      context: hydrateContext(options, isMatching),
      reference: hydrateReference(options, isWebKitNeeded(navigator.userAgent))
    }
  );
}
