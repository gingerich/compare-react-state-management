import React, { Component } from "react"
import { connect } from "react-redux"

class TodoApp extends Component {

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

export default connect(
  // do stuff here
)(TodoApp)
