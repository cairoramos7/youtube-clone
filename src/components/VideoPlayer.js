import React from 'react'

import { connect } from 'react-redux'

import { Advertisement, Embed } from 'semantic-ui-react'

const VideoPlayer = (props) => {
	return (
		<div className="video-player">
			{/* When not props video */}
			{!props.video.id && (
				<Advertisement
					style={{ height: '433px' }}
					unit="top banner"
					test="escolha um vídeo para reproduzir"
				/>
			)}

			{/* When pros video */}
			{props.video.id && (
				<div>
					<Embed id={props.video.id.videoId} source="youtube" />
					<p className="video-titulo">{props.video.snippet.title}</p>
					<p className="video-descricao">
						{props.video.snippet.description}
					</p>
				</div>
			)}
		</div>
	)
}

const mapStateToProps = (state) => ({
	video: state.reproduz.video,
})

export default connect(
	mapStateToProps,
	null,
)(VideoPlayer)
