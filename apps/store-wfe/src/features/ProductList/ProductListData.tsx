import { CircularProgress } from "@mui/material"
import React from "react"

import { useProductsData } from "@app/data/productsData"

import { ProductList } from "./ProductList"
import { useProductListContextUndefined } from "./productListContext"

const ProductListDataComponent = () => {
	const { data: products, isLoading } = useProductsData()
	const { cardModeSize, displayMode, tableModeSize } = useProductListContextUndefined()

	if (isLoading) {
		return <CircularProgress title="Loading products..." />
	}

	return (
		<ProductList
			products={products ?? []}
			displayMode={displayMode?.[0]}
			cardModeSize={cardModeSize?.[0]}
			tableModeSize={tableModeSize?.[0]}
		/>
	)
}

export const ProductListData = React.memo(ProductListDataComponent)
