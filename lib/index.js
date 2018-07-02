import React, { Component } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import nextNode from 'next-node'

const withDimensions = ComposedComponent => {
  const displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

  class WithDimensions extends Component {
    static displayName = `WithDimensions(${displayName})`;

    state = {
      x: undefined,
      y: undefined,
      width: undefined,
      height: undefined,
      top: undefined,
      right: undefined,
      bottom: undefined,
      left: undefined
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
