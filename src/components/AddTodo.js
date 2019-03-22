import React from "react"

const AddTodo = props => {
	return (
		<div className="d-flex mb-4">
			<input
				type="text"
				placeholder="another Todo"
				className="form-control mr-5"
			/>
			<button className="btn btn-success">Ajouter</button>
		</div>
	)
}

export default AddTodo
