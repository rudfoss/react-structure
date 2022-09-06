import React from "react"

import { ProductListControls, ProductListData, ProductListProvider } from "@app/features/ProductList"
import { useSetPageTitle } from "@app/store/pageStore"

const ProductsPageComponent = () => {
	useSetPageTitle("Products", true)
	return (
		<ProductListProvider>
			<ProductListControls />
			<ProductListData />
		</ProductListProvider>
	)
}

export const ProductsPage = React.memo(ProductsPageComponent)
