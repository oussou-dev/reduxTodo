import React, { Component } from "react"
import AddTodo from "./components/AddTodo"
import Filter from "./components/Filter"
import TodoList from "./components/TodoList"

class App extends Component {
	render() {
		return (
			<div className="container p-2	">
				<div className="jumbotron jumbotron-fluid py-2">
					<div className="container text-center">
						<h3 className="display-4">Todo App</h3>
						<p className="lead">with React-Redux and Firebase</p>
					</div>
				</div>

				<h4>Ajouter une Todo</h4>

				<hr className="my-4" />
				<AddTodo />
				<hr className="my-4" />

				<div className="card">
					<div className="card-header d-flex flex-row align-items-center">
						<span className="flex-fill"> Todo List </span>
						<Filter />
					</div>

					<div className="card-body">
						<TodoList />
					</div>
				</div>
			</div>
		)
	}
}

export default App
