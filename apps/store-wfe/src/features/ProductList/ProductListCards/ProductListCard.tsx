import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

import { Product } from "@react-structure/clients/dummyJSON"

export interface ProductListCardProps {
	product: Product
	size?: "small" | "medium" | "large"
}

const cardSize = (size: ProductListCardProps["size"] = "medium") => {
	switch (size) {
		case "small":
			return { maxWidth: 200, height: 100 }
		case "medium":
			return { maxWidth: 450, height: 240 }
		case "large":
			return { maxWidth: "auto", height: 500 }
	}
}

const ProductListCardComponent = ({ product, size }: ProductListCardProps) => {
	const nav = useNavigate()
	const { maxWidth, height } = cardSize(size)

	const openProduct = () => {
		nav(`/products/${product.id}`)
	}

	return (
		<Card sx={{ maxWidth, height: "100%", display: "flex", flexDirection: "column" }}>
			<CardMedia component="img" height={height} image={product.images[0]} alt={`Product image of ${product.title}`} />
			<CardContent>
				<Typography variant="caption" component="div">
					{product.category}
				</Typography>
				<Typography variant="caption" component="div">
					{product.rating}
				</Typography>
				<Typography variant="body2">{product.description}</Typography>
			</CardContent>
			<CardActions sx={{ marginTop: "auto" }}>
				<Button size="small" onClick={openProduct}>
					More information
				</Button>
			</CardActions>
		</Card>
	)
}

export const ProductListCard = React.memo(ProductListCardComponent)
