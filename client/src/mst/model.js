import { types } from "mobx-state-tree"

const Todo = types.model({
    // properties
    title: 'Learn Things',
    completed: false
})

const TodoStore = types
    .model({
        // properties
        todos: types.optional(types.array(Todo), [])
    })
    .views(self => ({
        // utilities
    }))
    .actions(self => ({
        // actions
    }))

export default TodoStore
