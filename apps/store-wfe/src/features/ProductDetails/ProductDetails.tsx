import React from "react"

import { CenteredLayout } from "@app/layouts"
import { useSetPageTitle } from "@app/store/pageStore"

import { Product } from "@react-structure/clients/dummyJSON"

export interface ProductDetailsProps {
	product: Product
}

const ProductDetailsComponent = ({ product }: ProductDetailsProps) => {
	useSetPageTitle(product.title, true)
	return <CenteredLayout>{product.title}</CenteredLayout>
}

export const ProductDetails = React.memo(ProductDetailsComponent)
