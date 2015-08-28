class MatchMedia {
  constructor(options) {
    this.listeners = [];
    this.state = options.reduce((acc, current) => {
      const { name, query } = current;
      const MediaQueryList = window.matchMedia(query);

      // TODO:
      // below `onchange` fail to fire event in FF & Safari, if someone know
      // how to make it work, thanks to let me know.
      //
      //  MediaQueryList.onchange = event => {
      //    this.updateCurrentMatch(name, event);
      //  };

      MediaQueryList.addListener((event) => {
        this.updateCurrentMatch(name, event);
      });

      return {
        ...acc,
        [name]: MediaQueryList
      };
    }, {});
  }

  updateCurrentMatch(key, event) {
    if (event.matches) {
      this.listeners.map(listener => listener(key));
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
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
