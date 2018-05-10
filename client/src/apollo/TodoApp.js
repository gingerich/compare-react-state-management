import React from "react"
import { graphql } from "react-apollo"
import { TODOS_QUERY } from "../shared/queries"

const TodoApp = props => {
  if (props.error) {
    return "An unexpected error occurred"
  }

  if (props.loading) {
    return "Loading..."
  }

  return (
    <React.Fragment>
      <span>Hello World</span>
    </React.Fragment>
  )
}

export default graphql(TODOS_QUERY, {

})(TodoApp)
