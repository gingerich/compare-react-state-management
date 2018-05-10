import { combineReducers } from "redux"

export const todos = (
  state = {
    items: [],
    error: null,
    loading: false,
  },
  action
) => {
  return state
}

export const visibilityFilter = (state = "SHOW_ALL", action) => {
  return state;
}

export const rootReducer = combineReducers({ todos, visibilityFilter })
