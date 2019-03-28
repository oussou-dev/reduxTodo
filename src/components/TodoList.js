import React from "react"
import TodoItem from "../components/TodoItem"
import { connect } from "react-redux"
import { visibilityFilters } from "../store/actions"

const TodoList = ({ todos }) => {
	return (
		<ul className="list-group">
			{todos &&
				todos.map((t, i) => <TodoItem key={t.name + i} todo={t} />)}
		</ul>
	)
}

export default connect(state => {
	// console.log(state)
	const filter = state.filter
	let todos = []
	switch (filter) {
		case visibilityFilters.SHOW_ALL:
			{
				todos = state.todos
			}
			break
		case visibilityFilters.SHOW_DONE:
			{
				todos = state.todos.filter(t => t.done)
			}
			break
		case visibilityFilters.SHOW_ACTIVE: {
			todos = state.todos.filter(t => !t.done)
		}
		default: {
			todos = state.todos
		}
	}

	return {
		todos
	}
})(TodoList)
