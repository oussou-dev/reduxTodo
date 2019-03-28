import React from "react"

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
	return (
		<li
			onClick={toggleTodo}
			className="list-group-item d-flex flex-row justify-content-between aligns-item-center my-1"
		>
			<span>{todo.name}</span>
			<span>
				<input
					checked={todo.done}
					onChange={() => {}}
					className="mx-3"
					type="checkbox"
				/>
				<button
					onClick={e => {
						e.stopPropagation()
						deleteTodo()
					}}
					className="btn btn-sm btn-danger mr-3"
				>
					delete
				</button>
			</span>
		</li>
	)
}

export default TodoItem
