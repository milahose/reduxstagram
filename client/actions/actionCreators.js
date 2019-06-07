/* eslint-disable babel/arrow-parens */
// increment action
export function increment(index){
	return { type: 'INCREMENT_LIKES', index };
}

// comment
export function comment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}

// remove comment
export function removeComment(postId, idx) {
	return {
		type: 'DELETE_Comment',
		idx
	}
}

