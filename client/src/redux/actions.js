import request from "../shared/request"
import {
  ADD_TODO_MUTATION,
  TOGGLE_TODO_MUTATION,
  CLEAR_TODO_MUTATION,
} from "../shared/mutations"
import { TODOS_QUERY } from "../shared/queries"

export const requestTodos = () => {
  return { type: "REQUEST_TODOS" }
}

// export more actions
