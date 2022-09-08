import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import React from "react"

import { Product } from "@react-structure/clients/dummyJSON"

import { ProductListTableRow } from "./ProductListTableRow"

export interface ProductListTableProps {
	products: Product[]
	size?: "small" | "medium"
}

const ProductListTableComponent = ({ products, size = "medium" }: ProductListTableProps) => {
	return (
		<Table size={size}>
			<TableHead>
				<TableRow>
					<TableCell>Image</TableCell>
					<TableCell>Product</TableCell>
					<TableCell>Category</TableCell>
					<TableCell>Rating</TableCell>
					<TableCell>Price</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{products.map((product) => (
					<ProductListTableRow key={product.id} product={product} />
				))}
			</TableBody>
		</Table>
	)
}

export const ProductListTable = React.memo(ProductListTableComponent)
