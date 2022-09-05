import React from "react"

import { ProductListData } from "@app/features/ProductList"
import { useSetPageTitle } from "@app/store/pageStore"

const ProductsPageComponent = () => {
	useSetPageTitle("Products")
	return <ProductListData />
}

export const ProductsPage = React.memo(ProductsPageComponent)
