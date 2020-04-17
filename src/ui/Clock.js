import React, { Component } from 'react'

class Clock extends Component {
  state = { time: Date.now() };

  // Called whenever our component is created
  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() })
    }, 1000)
  }

  // Called just before our component will be destroyed
  componentWillUnmount() {
    // stop when not renderable
    clearInterval(this.timer)
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString()
    return (<h1 class="x-secondary c-x">
      <em>new version</em>
      {time}
      {' '}
local time
    </h1>)
  }
}

export default Clock
