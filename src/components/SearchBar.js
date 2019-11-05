import React, { Component } from 'react'

import { Segment, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { buscaVideo } from './../store/actions/busca-video'

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.props.handleBuscaVideo('Futebol')
	}

	pesquisaTermo = (e) => {
		if (e.keyCode === 13) {
			const termo = e.target.value
			this.props.handleBuscaVideo(termo)
		}
	}

	render() {
		return (
			<div className="search-bar">
				<Segment stacked>
					<Input
						icon="search"
						onKeyDown={(e) => this.pesquisaTermo(e)}
						size="large"
						placeholder="Search..."
					/>
				</Segment>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleBuscaVideo: (termo) => dispatch(buscaVideo(termo)),
	}
}

export default connect(
	null,
	mapDispatchToProps,
)(SearchBar)
