# [React Inline Grid](http://broucz.github.io/react-inline-grid)

**A simplified and predictable inline grid for laying out content in [React](https://facebook.github.io/react/) applications, using [Redux](https://github.com/rackt/redux) and [Immutable-js](http://facebook.github.io/immutable-js/).**

```js
<Grid>
  <Row>
    <Cell>
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
  margin: '0 auto 0 auto',
  alignItems: 'stretch'
}
```
So far `is` can only specify `justify-content` style property as:
- `start`
- `center`
- `end`
- `around`
- `between`

```js
<Row is="center">{...}</Row>
```

### &lt;Cell />

Exposes the props `is` (string) to alterate the following default style object:

```js
{
  boxSizing: 'border-box'
}
```
So far `is` can only specify cell size and `align-self` style property as:
- `<screen name>-<value>` || `<value>`
- `top`
- `middle`
- `bottom`
- `stretch`

```js
<Cell is="middle 4 tablet-8">{...}</Cell>
```

## Examples

The [gh-pages](http://broucz.github.io/react-inline-grid/) page of this repository use some patterns as examples, but feel free to play and test your layouts using the `examples` folder.

**To run any of them, clone the repo and run `npm install` both in the root and the example folder.**

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

## Production ready ?

No dude !

I published this package after few days of fun with React, Redux and Immutable-js during my free time. I was looking for an inline grid solution for some other React related project, without success. And even if I keep on using a classic CSS solution, I thought that it could be intresting to test these libraries with this kind of project. Grid system combine usability, performance needs, and have to be updated following the context.

Currently in v0.1.x, I still have to done a lot before thinking about using it in production. Styles properties wasn't my first concern so far, context handling is minimal, and moreover, you'll not able to find any tests in this repository \o/ !

Time missing... but I'll continue working on it in the coming days.
