function setModel(options) {
  return options.map(n => {
    const { name, query } = n;
    return {
      name,
      query
    };
  });
}

function setState(model, handleChange) {
  return model.map(({ name, query }) => {
    const match = window.matchMedia(query);
    match.add = () => match.addListener(handleChange);
    match.add();
    match.remove = () => match.removeListener(handleChange);

    return {
      name,
      match
    };
  });
}

class MatchMedia {
  constructor(list) {
    this.listeners = [];
    this.state = [];
    this.model = setModel(list.slice());

    return this.updateState();
  }

  handleChange() {
    this.state.slice().forEach(({ match }) => match.remove());

    return this.updateState();
  }

  updateState() {
    this.state =
      setState(this.model, this.handleChange.bind(this));

    return this.dispatchUpdate();
  }

  getCurrentName() {
    const current =
      this.state.filter(({ match }) => match.matches);

    const { name } =
      (current.length > 0)
        ? current[0]
        : this.model[0];

    return name;
  }

  dispatchUpdate() {
    const current = this.getCurrentName();
    return this.listeners
      .slice()
      .forEach(listener => listener(current));
  }

  subscribe(listener) {
    this.listeners.push(listener);

    return function unsubscribe() {
      if (this.listeners != null) {
        const index = this.listeners.indexOf(listener);
        this.listeners = this.listeners.slice(index, 1);
      }
    };
  }
}

export default function matchMedia(list) {
  const mM = new MatchMedia(list);

  return {
    subscribe: mM.subscribe.bind(mM),
    getCurrentName: mM.getCurrentName()
  };
}
