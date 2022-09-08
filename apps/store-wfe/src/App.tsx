import React from "react"
import { BrowserRouter } from "react-router-dom"
import "modern-normalize"

import { ApiClientsProvider } from "@app/contexts/apiClients"
import { ReactQueryProvider } from "@app/contexts/reactQuery"
import { Routes } from "@app/routes"

const AppComponent = () => {
	return (
		<ApiClientsProvider>
			<ReactQueryProvider>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</ReactQueryProvider>
		</ApiClientsProvider>
	)
}

export const App = React.memo(AppComponent)
