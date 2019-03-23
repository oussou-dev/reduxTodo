import * as reducers from "./reducers"
import { combineReducers, createStore } from "redux"

const todosReducer = combineReducers(reducers)
const store = createStore(todosReducer)

export default store
