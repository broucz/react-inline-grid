import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
import { hydrateContext, hydrateReference } from './hydrateState';

export default function store(options) {
  return createStore(
    combineReducers(reducers),
    {
      context: hydrateContext(options),
      reference: hydrateReference(options)
    });
}
