import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"
// import { createStore } from "redux"
// import { todosReducer } from "./store/reducers"
import { Provider } from "react-redux"
import store from "./store"

const rootElement = document.getElementById("root")
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
)
