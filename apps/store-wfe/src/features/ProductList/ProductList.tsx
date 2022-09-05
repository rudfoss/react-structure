import { Alert } from "@mui/material"
import React from "react"

import { Product } from "@react-structure/clients/dummyJSON"

import { ProductListCards } from "./ProductListCards"

export interface ProductListProps {
	products: Product[]
	displayMode?: "cards" | "table"
}

const ProductListComponent = ({ products, displayMode = "cards" }: ProductListProps) => {
	if (products.length === 0) {
		return <Alert severity="info">There are no products to display</Alert>
	}

	return displayMode === "cards" ? <ProductListCards products={products} /> : <>not implemented yet</>
}

export const ProductList = React.memo(ProductListComponent)
