import styled from "@emotion/styled"
import { IconButton, Typography } from "@mui/material"
import React from "react"
import { MdRemove } from "react-icons/md"

import { FriendlyDate } from "@react-structure/ui/FriendlyDate"

const Li = styled.li`
	padding: 0;
	margin-bottom: 12px;
	display: flex;
`
const RemoveContainer = styled.div`
	margin-left: auto;
`

export interface CommentEntry {
	id: string
	text: string
	timestamp: string
}

export interface CommentProps {
	comment: CommentEntry
	onRemove?: () => unknown
}

const CommentComponent = ({ comment, onRemove }: CommentProps) => {
	return (
		<Li>
			<div>
				<Typography variant="caption" component="div">
					<FriendlyDate>{comment.timestamp}</FriendlyDate>
				</Typography>
				<Typography variant="body1" component="div">
					{comment.text}
				</Typography>
			</div>
			{onRemove && (
				<RemoveContainer>
					<IconButton onClick={onRemove} title="Remove comment">
						<MdRemove />
					</IconButton>
				</RemoveContainer>
			)}
		</Li>
	)
}

export const Comment = React.memo(CommentComponent)
