import React from "react"
import TodoItem from "../components/TodoItem"

const TodoList = props => {
	return (
		<ul className="list-group">
			<TodoItem />
		</ul>
	)
}

export default TodoList
