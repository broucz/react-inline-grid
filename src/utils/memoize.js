import cache from './cache';

export default function memoize(callback) {
  return function getInMemory(key) {
    if (!cache.hasOwnProperty(key)) {
      cache[key] = callback.call(this, key);
    }
    return cache[key];
  };
}
