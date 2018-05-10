import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { rootReducer } from "./reducers"
import TodoApp from "./TodoApp"

const todoStore = createStore(rootReducer)

const ReduxTodoApp = props => {
  return (
    <Provider store={todoStore}>
      <TodoApp />
    </Provider>
  )
}

export default ReduxTodoApp
