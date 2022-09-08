import { Routes as ReactRoutes, Route } from "react-router-dom"

import { MainLayout } from "@app/layouts"

import { HomePage } from "./HomePage"

export const Routes = () => (
	<ReactRoutes>
		<Route path="/" element={<MainLayout />}>
			<Route index element={<HomePage />} />
			{/* <Route path="products">
				<Route index element={<ProductsPage />} />
				<Route path=":id" element={<ProductDetailsPage />} />
			</Route> */}
		</Route>
	</ReactRoutes>
)
