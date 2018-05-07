// https://github.com/mobxjs/mobx-state-tree

import React from "react"
import { Provider } from "react-redux"
import { asReduxStore } from "mst-middlewares"

import todosFactory from "./model"
import TodoApp from "./TodoApp"

const initialState = {
    todos: [
        {
            text: "learn Redux",
            completed: false,
            id: 0
        }
    ]
}
const todos = (window.todos = todosFactory.create(initialState))
const store = asReduxStore(todos)

const MSTTodoApp = () => {
    return (
        <Provider store={store}>
            <TodoApp />
        </Provider>
    )
}

export default MSTTodoApp
