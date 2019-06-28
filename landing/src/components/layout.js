import React, { Component } from 'react'
import { Grommet, ResponsiveContext } from 'grommet'
import '../assets/css/normalize.css'
import '../assets/css/skeleton.css'
import './layout.css'

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props
    return (
      <Grommet full={true}>
        <ResponsiveContext.Consumer>
          {() => children}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

export default Template;
