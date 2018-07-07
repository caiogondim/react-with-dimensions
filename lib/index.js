// @flow

import * as React from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import nextNode from 'next-node'

type DimensionsType = {|
  x: ?number,
  y: ?number,
  width: ?number,
  height: ?number,
  top: ?number,
  right: ?number,
  bottom: ?number,
  left: ?number
|}

function withDimensions<Props: {}>(ComposedComponent: React.ComponentType<Props>) {
  const displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component'

  class WithDimensions extends React.Component<Props, DimensionsType> {
    static displayName = `WithDimensions(${displayName})`

    state = {
      x: null,
      y: null,
      width: null,
      height: null,
      top: null,
      right: null,
      bottom: null,
      left: null
    }

    el = React.createRef()

    resizeObserver = new ResizeObserver(entries => {
      const contentRect = entries[0].contentRect
      this.setState({
        x: contentRect.x,
        y: contentRect.y,
        width: contentRect.width,
        height: contentRect.height,
        top: contentRect.top,
        right: contentRect.right,
        bottom: contentRect.bottom,
        left: contentRect.left
      })
    })

    componentDidMount() {
      this.resizeObserver.observe(nextNode(this.el.current))
    }

    componentWillUnmount() {
      this.resizeObserver.unobserve(nextNode(this.el.current))
    }

    render() {
      return ([
        <div
          style={{
            position: 'absolute',
            width: 0,
            height: 0,
            visibility: 'hidden',
            display: 'none',
          }}
          ref={this.el}
          key={1}
        />,
        <ComposedComponent dimensions={this.state} key={2} {...this.props} />
      ])
    }
  }

  return WithDimensions
}

export default withDimensions
