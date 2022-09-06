import { Typography } from "@mui/material"
import React from "react"

import { Comments } from "@app/features/Comments"
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
			<Typography variant="h2">{product.title}</Typography>
			<Typography variant="caption">
				{product.rating} -{product.category}
			</Typography>
			<Typography variant="body1">{product.description}</Typography>
			<Comments uid={`productComments-${product.id}`} />
		</CenteredLayout>
	)
}

export const ProductDetails = React.memo(ProductDetailsComponent)
