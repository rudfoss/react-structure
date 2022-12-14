import styled from "@emotion/styled"
import React from "react"

import { Product } from "@react-structure/clients/dummyJSON"

import { ProductListCard, ProductListCardProps } from "./ProductListCard"

const CardContainer = styled.ul<{ fillWidth?: boolean }>`
	display: ${({ fillWidth }) => (fillWidth ? "block" : "flex")};
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
	list-style: none;
	margin: 0;
	padding: 0;
`
const CardItem = styled.li`
	margin: 12px;
	padding: 0;
`

export interface ProductListCardsProps {
	products: Product[]
	size?: ProductListCardProps["size"]
}

const ProductListCardsComponent = ({ products, size }: ProductListCardsProps) => {
	return (
		<CardContainer fillWidth={size === "large"}>
			{products.map((product) => (
				<CardItem key={product.id}>
					<ProductListCard size={size} product={product} />
				</CardItem>
			))}
		</CardContainer>
	)
}

export const ProductListCards = React.memo(ProductListCardsComponent)
