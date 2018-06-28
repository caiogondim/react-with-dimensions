# react-with-dimensions

<div>
  <a href="https://www.npmjs.com/package/react-with-dimensions"><img src="https://img.shields.io/npm/v/react-with-dimensions.svg" /></a>
</div>

<br>

React decorator to receive dimensions props generated by
[`ResizeObserver`](https://developers.google.com/web/updates/2016/10/resizeobserver).

## Installation

```console
npm install --save react-with-dimensions
```

## Usage

Decorated component will receive an addicional `dimensions` prop with all keys
defined in [DOMRectReadOnly](https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly).

- `x`: The x coordinate of the DOMRect's origin
- `y`: The y coordinate of the DOMRect's origin
- `width`: The width of the DOMRect
- `height`: The height of the DOMRect
- `top`: Returns the top coordinate value of the DOMRect (usually the same as `y`)
- `right`: Returns the right coordinate value of the DOMRect (usually the same as `x` + `width`)
- `bottom`: Returns the bottom coordinate value of the DOMRect (usually the same as `y` + `height`)
- `left`: Returns the left coordinate value of the DOMRect (usually the same as `x`)

```js
import React, { Component } from 'react'
import withDimensions from 'react-with-dimensions'

//
// decorator
//

@withDimensions
class Box extends Component {
  render() {
    <div>
      <p>width: {this.props.dimensions.width}</p>
      <p>height: {this.props.dimensions.height}</p>
    </div>
  }
}

//
// function
//

class Box extends Component {
  render() {
    <div>
      <p>width: {this.props.dimensions.width}</p>
      <p>height: {this.props.dimensions.height}</p>
    </div>
  }
}

const BoxWithDimensions = withDimensions(Box)
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)

