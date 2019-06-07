import React from 'react';

class Comments extends React.Component {
	render() {
		const comments = this.props.comments;
		return (
			<div className="comments">
				{comments.map((comment, i) => (
					<div className="comment" key={i}>
						<p>
							<strong>{comment.user}</strong>
							{comment.text}
							<button className="remove-comment">&times;</button>
						</p>
					</div>
				))}
			</div>
		)
	}
}

export default Comments;