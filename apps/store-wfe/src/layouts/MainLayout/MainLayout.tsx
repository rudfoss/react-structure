import React from "react"
import { Outlet } from "react-router-dom"

import { Header } from "./Header"

export interface MainLayoutProps {
	children?: React.ReactNode
}

const MainLayoutComponent = ({ children = <Outlet /> }: MainLayoutProps) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export const MainLayout = React.memo(MainLayoutComponent)
