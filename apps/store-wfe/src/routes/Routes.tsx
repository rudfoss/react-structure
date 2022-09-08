import { Routes as ReactRoutes, Route } from "react-router-dom"

import { MainLayout } from "@app/layouts"

import { NavigateRefProvider } from "@react-structure/utils/react-router/navigateRefContext"

import { HomePage } from "./HomePage"
import { ProductDetailsPage } from "./ProductDetailsPage"
import { ProductsPage } from "./ProductsPage"

export const Routes = () => (
	<NavigateRefProvider>
		<ReactRoutes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="products">
					<Route index element={<ProductsPage />} />
					<Route path=":id" element={<ProductDetailsPage />} />
				</Route>
			</Route>
		</ReactRoutes>
	</NavigateRefProvider>
)
