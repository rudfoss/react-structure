import styled from "@emotion/styled"
import { IconButton, TextField } from "@mui/material"
import { nanoid } from "nanoid"
import React, { useState } from "react"
import { MdSend } from "react-icons/md"

import { onChange } from "@react-structure/utils/react/onChange"
import { useBrowserStore } from "@react-structure/utils/react/useBrowserStore"

import { Comment, CommentEntry } from "./Comment"

const Container = styled.div`
	padding: 24px 0;
`
const NewComment = styled.div`
	display: flex;
	align-items: center;
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
	const [newComment, setNewComment] = useState("")

	const addComment = () => {
		setComments(
			comments.concat([
				{
					id: newId(),
					text: newComment,
					timestamp: new Date().toISOString()
				}
			])
		)
		setNewComment("")
	}
	const onCtrlEnter = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (evt.ctrlKey && evt.key === "Enter") {
			addComment()
		}
	}

	const removeComment = (commentIdToRemove: string) => () => {
		setComments(comments.filter((comment) => comment.id !== commentIdToRemove))
	}

	return (
		<Container>
			<NewComment>
				<TextField
					label="Comment"
					multiline
					fullWidth
					value={newComment}
					rows={4}
					onChange={onChange(setNewComment)}
					inputProps={{ onKeyDown: onCtrlEnter }}
				/>
				<IconButton color="primary" size="large">
					<MdSend />
				</IconButton>
			</NewComment>
			<CommentList>
				{comments.map((comment) => (
					<Comment key={comment.id} comment={comment} onRemove={removeComment(comment.id)} />
				))}
			</CommentList>
		</Container>
	)
}

export const Comments = React.memo(CommentsComponent)
