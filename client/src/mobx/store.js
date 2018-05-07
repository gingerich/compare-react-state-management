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

const todoStore = observable.object({
  todos: observable.map(),
  errors: null,
  loading: false,
  visibilityFilter: "SHOW_ALL",

  get visibleTodos() {
    return getVisibleTodos([...this.todos.values()], this.visibilityFilter)
  },

  loadTodos() {
    this.todos.clear()
    this.error = null
    this.loading = true
    request(TODOS_QUERY)
      .then(
        action(response => {
          response.todos.forEach(todo => {
            this.todos.set(todo.id, todo)
          })
        })
      )
      .catch(
        action(error => {
          this.error = error
        })
      )
      .then(
        action(() => {
          this.loading = false
        })
      )
  },

  addTodo(title) {
    request(ADD_TODO_MUTATION, { title }).then(
      action(response => {
        this.todos.set(response.addTodo.id, response.addTodo)
      })
    )
  },

  toggleTodo(id) {
    request(TOGGLE_TODO_MUTATION, { id }).then(
      action(response => {
        const todo = this.todos.get(id)
        this.todos.set(id, { ...todo, ...response.toggleTodo })
      })
    )
  },

  clearTodo (id) {
    request(CLEAR_TODO_MUTATION, { id }).then(
      action(() => {
        this.todos.delete(id)
      })
    )
  },

  setVisibilityFilter(filter) {
    action(() => this.visibilityFilter = filter)()
  },
},
{
  loadTodos: action.bound,
  addTodo: action.bound,
  toggleTodo: action.bound,
  clearTodo: action.bound
})

export default todoStore
