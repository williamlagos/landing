import React from 'react'

class Container extends React.Component {
    render() {
      const { children } = this.props
      return (<div class="container">{children}</div>)
    }
}

export default Container
