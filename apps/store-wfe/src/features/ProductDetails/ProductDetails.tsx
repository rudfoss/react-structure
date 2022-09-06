import React from "react"

import { CenteredLayout } from "@app/layouts"
import { useSetPageTitle } from "@app/store/pageStore"
import { ImageCarousel } from "@app/ui/ImageCarousel"

import { Product } from "@react-structure/clients/dummyJSON"

export interface ProductDetailsProps {
	product: Product
}

const ProductDetailsComponent = ({ product }: ProductDetailsProps) => {
	useSetPageTitle(product.title, true)
	return (
		<CenteredLayout>
			<ImageCarousel images={product.images} />
		</CenteredLayout>
	)
}

export const ProductDetails = React.memo(ProductDetailsComponent)
