import styled from "@emotion/styled"
import { nanoid } from "nanoid"
import React from "react"

import { useBrowserStore } from "@react-structure/utils/react/useBrowserStore"

import { Comment, CommentEntry } from "./Comment"
import { NewComment } from "./NewComment"

const Container = styled.div`
	padding: 24px 0;
`
const CommentList = styled.ul`
	margin: 12px 0 0;
	padding: 0;
	list-style: none;
`

const newId = nanoid

export interface CommentsProps {
	/**
	 * Specify a unique id to group comments under. All Comments components with the same ID share the same data store.
	 */
	uid: string
}

const CommentsComponent = ({ uid }: CommentsProps) => {
	const [comments, setComments] = useBrowserStore<CommentEntry[]>(`comments-${uid}`, [])

	const addComment = (text: string) => {
		setComments(
			comments.concat([
				{
					id: newId(),
					text,
					timestamp: new Date().toISOString()
				}
			])
		)
	}

	const removeComment = (commentIdToRemove: string) => () => {
		setComments(comments.filter((comment) => comment.id !== commentIdToRemove))
	}

	return (
		<Container>
			<NewComment addComment={addComment} />
			<CommentList>
				{comments.map((comment) => (
					<Comment key={comment.id} comment={comment} onRemove={removeComment(comment.id)} />
				))}
			</CommentList>
		</Container>
	)
}

export const Comments = React.memo(CommentsComponent)
