import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <section className="pageHeader">
        <h1 className="pageHeaderTitle">react-inline-grid</h1>
        <h2 className="pageHeaderTagline">Predictable flexbox based grid for React</h2>
        <a href="https://github.com/broucz/react-inline-grid" target="_blank" className="btn">View on GitHub</a>
      </section>
    );
  }
}

export default Header;
