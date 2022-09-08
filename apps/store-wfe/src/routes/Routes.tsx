import React from "react"
import { Routes as ReactRoutes, Route } from "react-router-dom"

import { MainLayout } from "@app/layouts"

import { NavigateRefProvider } from "@react-structure/utils/react-router/navigateRefContext"

import { HomePage } from "./HomePage"

const ProductDetailsPage = React.lazy(() =>
	import("./ProductDetailsPage").then(({ ProductDetailsPage }) => ({ default: ProductDetailsPage }))
)
const ProductsPage = React.lazy(() => import("./ProductsPage").then(({ ProductsPage }) => ({ default: ProductsPage })))

const RoutesComponent = () => {
	return (
		<React.Suspense>
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
		</React.Suspense>
	)
}

export const Routes = React.memo(RoutesComponent)
