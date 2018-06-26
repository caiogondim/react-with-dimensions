import React, { Component } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import nextNode from 'next-node'

const WithDimensions = ComposedComponent => {
  class WithUser extends Component {
    constructor() {
      super()
      this.el = React.createRef()
      this.resizeObserver = new ResizeObserver(entries => {
        const contentRect = entries[0].contentRect
        this.setState({
          width: contentRect.width,
          height: contentRect.height
        })
      })
    }

    componentDidMount() {
      this.resizeObserver.observe(nextNode(this.el))
    }

    componentWillUnmount() {
      this.resizeObserver.unobserve(nextNode(this.el))
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
          ref={(el) => this.el = el}
          key={1}
        />,
        <ComposedComponent dimensions={this.state} {...this.props} key={2} />
      ])
    }
  }

  return WithUser
}

export default WithDimensions
