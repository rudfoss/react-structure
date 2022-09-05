import styled from "@emotion/styled"
import { TableCell, TableRow } from "@mui/material"
import React from "react"

import { Product } from "@react-structure/clients/dummyJSON"

const ProductImage = styled.img`
	max-height: 32px;
`

export interface ProductListTableRowProps {
	product: Product
}

const ProductListTableRowComponent = ({ product }: ProductListTableRowProps) => {
	const { title, images, category, rating, price } = product

	return (
		<TableRow>
			<TableCell>
				<ProductImage src={images[0]} alt={title} />
			</TableCell>
			<TableCell>{title}</TableCell>
			<TableCell>{category}</TableCell>
			<TableCell>{rating}</TableCell>
			<TableCell>${price}</TableCell>
		</TableRow>
	)
}

export const ProductListTableRow = React.memo(ProductListTableRowComponent)
