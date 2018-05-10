import { observable, action, configure } from "mobx"
import request from "../shared/request"
import { getVisibleTodos } from "../shared/selectors"
import { TODOS_QUERY } from "../shared/queries"
import {
  ADD_TODO_MUTATION,
  TOGGLE_TODO_MUTATION,
  CLEAR_TODO_MUTATION,
} from "../shared/mutations"

configure({ enforceActions: true })

const todoStore = observable.object({})

export default todoStore
