import fixMatchMedia from './fixMatchMedia';

export default function isMatching(query) {
  return (window.matchMedia)
    ? window.matchMedia(query)
    : fixMatchMedia();
}
