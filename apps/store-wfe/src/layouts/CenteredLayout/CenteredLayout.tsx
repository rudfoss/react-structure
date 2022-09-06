import styled from "@emotion/styled"
import React from "react"
import { Outlet } from "react-router-dom"

const Container = styled.div`
	display: flex;
	justify-content: center;
`
const Content = styled.div<{ maxWidth: number }>`
	max-width: ${({ maxWidth }) => `${maxWidth}px`};
	padding: 0 12px;
`

export interface CenteredLayoutProps {
	maxWidth?: number
	children?: React.ReactNode
}

const CenteredLayoutComponent = ({ maxWidth = 600, children = <Outlet /> }: CenteredLayoutProps) => {
	return (
		<Container>
			<Content maxWidth={maxWidth}>{children}</Content>
		</Container>
	)
}

export const CenteredLayout = React.memo(CenteredLayoutComponent)
