import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"
import { createStore } from "redux"
import { todosReducer } from "./store/reducers"

const store = createStore(todosReducer)

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
