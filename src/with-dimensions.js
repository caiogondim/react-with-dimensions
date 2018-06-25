import React, { Component } from 'react'
import ResizeObserver from 'resize-observer-polyfill'


const WithDimensions = ComposedComponent => {
  class WithUser extends Component {
    constructor() {
      super()
      this.el = React.createRef()
      this.resizeObserver = new ResizeObserver(entries => {
        const contentRect = entries[0].contentRect
        console.warn({contentRect})
        this.setState({
          width: contentRect.width,
          height: contentRect.height
        })
      })
    }

    componentDidMount() {
      this.resizeObserver.observe(this.el.parentElement)
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
          key={123123123123}
        />,
        <ComposedComponent dimensions={this.state} {...this.props} />
      ])
    }
  }

  return WithUser
}

export default WithDimensions
