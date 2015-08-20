import { Seq, Map, OrderedSet } from 'immutable';

class MatchMedia {
  constructor(options) {
    this.listeners =
      new OrderedSet;

    this.state =
      new Seq(options)
        .reduce((obj, n) => {
          const name = n.get('name');
          const MediaQueryList = window.matchMedia(n.get('query'));

          MediaQueryList.onchange = event => {
            this.updateCurrentMatch(name, event);
          };

          return obj.setIn(['queries', name], MediaQueryList);
        }, new Map());
  }

  updateCurrentMatch(key, event) {
    if (event.matches) {
      this.listeners.map(listener => listener(key));
    }
  }

  sendCurrent(key, event) {
    if (event.matches) {
      this.listeners.map(listener => listener(key));
    }
  }

  subscribe(listener) {
    this.listeners = this.listeners.add(listener);
  }

  // TODO
  // unsubscribe() {}
}

export default function matchMedia(...args) {
  const mM = new MatchMedia(...args);

  return {
    subscribe: mM.subscribe.bind(mM)
  };
}
