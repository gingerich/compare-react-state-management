import React, { Component } from "react"
import { inject } from "mobx-react"

class TodoApp extends Component {
  componentDidMount() {
    // Load todos
  }

  render() {
    if (this.props.error) {
      return "An unexpected error occurred"
    }

    if (this.props.loading) {
      return "Loading..."
    }

    return (
      <React.Fragment>
        <span>Hello World</span>
      </React.Fragment>
    )
  }
}

// map store to props
export default inject(stores => ({

}))(TodoApp)
