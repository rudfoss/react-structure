import React from "react"
import { useParams } from "react-router-dom"

import { useProductData } from "@app/data/productsData"
import { ProductDetailsData } from "@app/features/ProductDetails"
import { useSetPageTitle } from "@app/store/pageStore"

import { JSXError } from "@react-structure/utils/react/JSXError"

const ProductDetailsPageComponent = () => {
	const { id } = useParams<"id">()
	const idNum = parseInt(id ?? "")
	const { data: product } = useProductData(idNum)
	useSetPageTitle(product?.title, true)

	if (isNaN(idNum)) {
		throw new JSXError(
			(
				<>
					Product id not specified or not a valid number
					<br />
					Specify a valid number.
				</>
			)
		)
	}

	return <ProductDetailsData productId={idNum} />
}

export const ProductDetailsPage = React.memo(ProductDetailsPageComponent)
