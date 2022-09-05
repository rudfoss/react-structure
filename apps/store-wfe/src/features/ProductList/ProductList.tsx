import { Alert } from "@mui/material"
import React from "react"

import { Product } from "@react-structure/clients/dummyJSON"

import { ProductListCards, ProductListCardsProps } from "./ProductListCards"
import { ProductListTable, ProductListTableProps } from "./ProductListTable"

export interface ProductListProps {
	products: Product[]
	displayMode?: "cards" | "table"
	cardModeSize?: ProductListCardsProps["size"]
	tableModeSize?: ProductListTableProps["size"]
}

const ProductListComponent = ({ products, displayMode = "cards", cardModeSize, tableModeSize }: ProductListProps) => {
	if (products.length === 0) {
		return <Alert severity="info">There are no products to display</Alert>
	}

	return displayMode === "cards" ? (
		<ProductListCards products={products} size={cardModeSize} />
	) : (
		<ProductListTable products={products} size={tableModeSize} />
	)
}

export const ProductList = React.memo(ProductListComponent)
