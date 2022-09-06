import { Alert, CircularProgress } from "@mui/material"
import React from "react"

import { useProductData } from "@app/data/productsData"

import { Product } from "@react-structure/clients/dummyJSON"

import { ProductDetails } from "./ProductDetails"

export interface ProductDetailsDataProps {
	productId: Product["id"]
}

const ProductDetailsDataComponent = ({ productId }: ProductDetailsDataProps) => {
	const { data: product, isLoading } = useProductData(productId)

	if (isLoading) {
		return <CircularProgress />
	}

	if (!product) {
		return <Alert severity="error">No product found with id {productId}</Alert>
	}

	return <ProductDetails product={product} />
}

export const ProductDetailsData = React.memo(ProductDetailsDataComponent)
