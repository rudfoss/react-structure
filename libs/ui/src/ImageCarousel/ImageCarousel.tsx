import styled from "@emotion/styled"
import { Pagination } from "@mui/material"
import React, { useEffect, useState } from "react"

import { onMuiChange } from "@react-structure/utils/react/onChange"

const Container = styled.div`
	width: 100%;
`
const Canvas = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	& > img {
		padding-bottom: 12px;
	}
`

export interface ImageCarouselProps {
	images: string[]
}

const ImageCarouselComponent = ({ images }: ImageCarouselProps) => {
	const [currentImagePage, setCurrentImagePage] = useState(1)
	const currentImage = images[currentImagePage - 1]

	useEffect(() => {
		if (!images.includes(currentImage)) {
			setCurrentImagePage(1)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [images])

	return (
		<Container>
			<Canvas>
				<img src={currentImage} alt="Illustration" />
				<Pagination count={images.length} page={currentImagePage} onChange={onMuiChange(setCurrentImagePage)} />
			</Canvas>
		</Container>
	)
}

export const ImageCarousel = React.memo(ImageCarouselComponent)
