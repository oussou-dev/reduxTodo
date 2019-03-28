import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../store/actions"

class AddTodo extends React.Component {
	constructor(props) {
		super(props)
		this.input = React.createRef()
	}

	submitTodo = () => {
		this.props.addTodo({
			name: this.input.current.value,
			done: false
		})
		this.input.current.value = ""
	}

	render() {
		return (
			<div className="d-flex mb-4">
				<input
					ref={this.input}
					type="text"
					placeholder="another Todo"
					className="form-control mr-5"
				/>
				<button onClick={this.submitTodo} className="btn btn-success">
					Ajouter
				</button>
			</div>
		)
	}
}

export default connect(
	null,
	{ addTodo }
)(AddTodo)
