import "./index.css"
import React from "react"
import ReactDOM from "react-dom"
import ApolloTodoApp from "./apollo"
import MobxTodoApp from "./mobx"
import MSTTodoApp from "./mst"
import ReduxTodoApp from "./redux"
import ContextTodoApp from "./context"

// NOTE: TodoApps are interchangeable
ReactDOM.render(<MSTTodoApp />, document.getElementById("root"))
