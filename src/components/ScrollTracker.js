import _ from 'lodash'
import React from 'react'

class ScrollTracker extends React.Component {
  state = {
    scrollDirection: null
  }

  _handleScroll = e => {
    if (window.scrollY - this.lastY > 0) {
      this.setState({
        scrollDirection: 'down'
      })
    } else {
      this.setState({
        scrollDirection: 'up'
      })
    }

    this.lastY = window.scrollY
  }

  handleScroll = _.debounce(this._handleScroll, 50)

  componentDidMount() {
    this.lastY = window.scrollY
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { scrollDirection } = this.state
    const { children } = this.props

    return children({ scrollDirection })
  }
}

export default ScrollTracker
