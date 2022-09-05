import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"

import { MainLayout } from "@app/layouts"

import { HomePage } from "./HomePage"
import { ProductsPage } from "./ProductsPage"

const RoutesComponent = () => (
	<ReactRoutes>
		<Route path="/" element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path="products" element={<ProductsPage />} />
		</Route>
	</ReactRoutes>
)

export const Routes = React.memo(RoutesComponent)
