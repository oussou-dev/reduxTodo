import React from "react"

const Filter = props => {
	return (
		<>
			<button className="btn btn-primary mr-2"> Tout </button>
			<button className="btn btn-info mr-2"> Fini </button>
			<button className="btn btn-info"> En cours </button>
		</>
	)
}

export default Filter
