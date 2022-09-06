import React from "react"
import { useParams } from "react-router-dom"

import { ProductDetailsData } from "@app/features/ProductDetails"

import { JSXError } from "@react-structure/utils/react/JSXError"

const ProductDetailsPageComponent = () => {
	const { id } = useParams<"id">()
	const idNum = parseInt(id ?? "")

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
