import styled from "@emotion/styled"
import React from "react"
import { Outlet } from "react-router-dom"

const Container = styled.div`
	display: flex;
	justify-content: center;
`
const Content = styled.div`
	max-width: 800px;
	padding: 0 12px;
`

export interface CenteredLayoutProps {
	children?: React.ReactNode
}

const CenteredLayoutComponent = ({ children = <Outlet /> }: CenteredLayoutProps) => {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	)
}

export const CenteredLayout = React.memo(CenteredLayoutComponent)
