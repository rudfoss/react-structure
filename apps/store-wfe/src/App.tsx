import React from "react"
import { BrowserRouter } from "react-router-dom"
import "modern-normalize"

import { ReactQueryProvider } from "@app/contexts/reactQuery"
import { Routes } from "@app/routes"

import { ErrorBoundary } from "@react-structure/utils/react/ErrorBoundary"
import { DevModeProvider } from "@react-structure/utils/react/devMode"

import { ApiClientsProvider } from "./contexts/apiClients/apiClientsContext"

const AppComponent = () => (
	<DevModeProvider name="app">
		<ErrorBoundary>
			<ApiClientsProvider>
				<ReactQueryProvider>
					<BrowserRouter>
						<Routes />
					</BrowserRouter>
				</ReactQueryProvider>
			</ApiClientsProvider>
		</ErrorBoundary>
	</DevModeProvider>
)

export const App = React.memo(AppComponent)
