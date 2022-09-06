import styled from "@emotion/styled"
import { IconButton, TextField } from "@mui/material"
import React, { useState } from "react"
import { MdSend } from "react-icons/md"

import { onChange } from "@react-structure/utils/react/onChange"

const Container = styled.div`
	display: flex;
	align-items: center;
`

export interface NewCommentProps {
	addComment: (text: string) => unknown
}

const NewCommentComponent = ({ addComment }: NewCommentProps) => {
	const [commentText, setCommentText] = useState("")

	const onAddComment = () => {
		addComment(commentText)
		setCommentText("")
	}
	const onCtrlEnter = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (evt.ctrlKey && evt.key === "Enter") {
			onAddComment()
		}
	}

	return (
		<Container>
			<TextField
				label="Comment"
				multiline
				fullWidth
				value={commentText}
				rows={4}
				onChange={onChange(setCommentText)}
				inputProps={{ onKeyDown: onCtrlEnter }}
			/>
			<IconButton color="primary" size="large">
				<MdSend />
			</IconButton>
		</Container>
	)
}

export const NewComment = React.memo(NewCommentComponent)
