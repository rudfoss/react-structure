import React from "react"
import { BrowserRouter } from "react-router-dom"
import "modern-normalize"

import { Routes } from "./routes"

const AppComponent = () => {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	)
}

export const App = React.memo(AppComponent)
