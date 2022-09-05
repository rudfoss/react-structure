import { CircularProgress } from "@mui/material"
import React from "react"

import { useProductsData } from "@app/data/productsData"

import { ProductList, ProductListProps } from "./ProductList"

export interface ProductListDataProps {
	displayMode?: ProductListProps["displayMode"]
}

const ProductListDataComponent = ({ displayMode }: ProductListDataProps) => {
	const { data: products, isLoading } = useProductsData()

	if (isLoading) {
		return <CircularProgress title="Loading products..." />
	}

	return <ProductList products={products ?? []} displayMode={displayMode} />
}

export const ProductListData = React.memo(ProductListDataComponent)
