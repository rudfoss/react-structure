import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"

import { MainLayout } from "@app/layouts"

import { HomePage } from "./HomePage"
import { ProductDetailsPage } from "./ProductDetailsPage"
import { ProductsPage } from "./ProductsPage"

const RoutesComponent = () => (
	<ReactRoutes>
		<Route path="/" element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path="products">
				<Route index element={<ProductsPage />} />
				<Route path=":id" element={<ProductDetailsPage />} />
			</Route>
		</Route>
	</ReactRoutes>
)

export const Routes = React.memo(RoutesComponent)
