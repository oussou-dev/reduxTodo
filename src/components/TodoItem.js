import React from "react"

const TodoItem = props => {
	return (
		<li className="list-group-item d-flex flex-row justify-content-between aligns-item-center my-1">
			<span>x</span>
			<span>
				<input className="mx-3" type="checkbox" />
				<button className="btn btn-sm btn-danger mr-3">delete</button>
			</span>
		</li>
	)
}

export default TodoItem