# [React Inline Grid](http://broucz.github.io/react-inline-grid)

**A simplified and predictable inline grid for laying out content in [React](https://facebook.github.io/react/) applications using [Redux](https://github.com/rackt/redux). ([demo](http://broucz.github.io/react-inline-grid))**

```js
<Grid>
  <Row>
    <Cell is="12">
      <div> Hello world! </div>
    </Cell>
  </Row>
</Grid>
```

[![npm version](https://img.shields.io/npm/v/react-inline-grid.svg?style=flat-square)](https://www.npmjs.com/package/react-inline-grid)

## Install
`npm install --save react-inline-grid`

## API

### Sample Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Cell } from 'react-inline-grid';

const box = { background: '#bdbdbd', padding: '8px' };

const Layout = React.createClass({
  render() {
    return (
      <Grid>
        <Row is="center">
          <Cell is="2 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="2 tablet-4 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="2 tablet-6 phone-4"><div style={{...box}}></div></Cell>
          <Cell is="2 tablet-2 phone-4"><div style={{...box}}></div></Cell>
        </Row>
      </Grid>
    );
  }
});

ReactDOM.render(<Layout />, document.body);
```
The library exports `Grid`, `Row` and `Cell`.

### &lt;Grid />
Wrap child component with [Redux](https://github.com/rackt/redux) `Provider` and exposes the props `options` (array) to define custom grid settings.

`options` shape:

```js
[
  {
    name: string    // required     - Name of the target screen, used as key word ex: <name>-12.
    order: number   // required     - From smaller to bigger screen.
    query: string   // required     - Media query to test.
    gutter: number  // default = 0  - Gutter size in pixel.
    margin: number  // default = 0  - Margin size in pixel.
    columns: number // default = 12 - Total number of columns for each row.
  }
]
```

If `options` is not provided, a default configuration inspired by [Google MDL](http://www.getmdl.io/components/index.html#layout-section/grid) is used. And so, `Grid` apply the following default configuration:

```js
[
  {
    name: 'phone',
    gutter: 16,
    margin: 16,
    columns: 4,
    order: 0,
    query: '(max-width: 479px)'
  },
  {
    name: 'tablet',
    gutter: 16,
    margin: 16,
    columns: 8,
    order: 1,
    query: '(min-width: 480px) and (max-width: 839px)'
  },
  {
    name: 'desktop',
    gutter: 16,
    margin: 16,
    columns: 12,
    order: 2,
    query: '(min-width: 840px)'
  }
]
```

### &lt;Row />

Exposes the props `is` (string) to alterate the following default style object:

```js
{
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'stretch'
}
```
`is` specify the `justify-content` style property as:
- `start`
- `center`
- `end`
- `around`
- `between`

```js
<Row is="center">
  <Cell>
    <div>Content</div>
  </Cell>
</Row>
```

### &lt;Cell />

Exposes the props `is` (string) to alterate the following default style object:

```js
{
  boxSizing: 'border-box'
}
```
`is` specify cell size and `align-self` style property as:
- `<screen name?>-<value>`
- `<screen name?>-offset-<value>`
- `top`
- `middle`
- `bottom`
- `stretch`

```js
<Row>
  <Cell is="middle 4 tablet-2 offset-1">
    <div>Content</div>
  </Cell>
</Row>
```
## Context

TODO when really used.

## Examples

The [gh-pages](http://broucz.github.io/react-inline-grid/) page of this repository use some patterns as examples, but feel free to play and test your layouts using the `examples` folder.

Run the gh-pages example:

```
git clone https://github.com/broucz/react-inline-grid.git

cd react-inline-grid
npm install

cd examples/gh-pages
npm install

npm start
open http://localhost:3000/
```

## Thanks

* [Redux](https://github.com/rackt/redux) I learned a lot from package evolution, author [@gaearon](https://github.com/gaearon), contributors, and related discussions.
* [React](https://facebook.github.io/react) for the fun.
* [React Redux](https://github.com/rackt/react-redux) to make it easier.
