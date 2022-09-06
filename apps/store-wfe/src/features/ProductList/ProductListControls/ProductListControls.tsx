/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import React from "react"
import { MdGridView, MdTableView } from "react-icons/md"

import { useProductListContext } from "../productListContext"

const Container = styled.div`
	display: flex;
	margin: 12px;
	& > *:not(div:first-of-type) {
		margin-left: 12px;
	}
`

const ProductListControlsComponent = () => {
	const {
		cardModeSize: cardModeSizeTuple,
		displayMode: displayModeTuple,
		tableModeSize: tableModeSizeTuple
	} = useProductListContext()
	const [displayMode, setDisplayMode] = displayModeTuple
	const [cardModeSize, setCardModeSize] = cardModeSizeTuple
	const [tableModeSize, setTableModeSize] = tableModeSizeTuple

	const onChangeHandler =
		<TValue,>(setter: (newValue: TValue) => unknown) =>
		(_: unknown, newValue: TValue | undefined) => {
			if (newValue) {
				setter(newValue)
			}
		}

	return (
		<Container>
			<ToggleButtonGroup size="large" value={displayMode} exclusive onChange={onChangeHandler(setDisplayMode as any)}>
				<ToggleButton value="cards" size="small">
					<MdGridView size={18} />
				</ToggleButton>
				<ToggleButton value="table" size="small">
					<MdTableView size={18} />
				</ToggleButton>
			</ToggleButtonGroup>
			{displayMode === "cards" && (
				<ToggleButtonGroup
					size="small"
					value={cardModeSize}
					exclusive
					onChange={onChangeHandler(setCardModeSize as any)}
				>
					<ToggleButton value="small">Small</ToggleButton>
					<ToggleButton value="medium">Medium</ToggleButton>
					<ToggleButton value="large">Large</ToggleButton>
				</ToggleButtonGroup>
			)}
			{displayMode === "table" && (
				<ToggleButtonGroup
					size="small"
					value={tableModeSize}
					exclusive
					onChange={onChangeHandler(setTableModeSize as any)}
				>
					<ToggleButton value="small">Dense</ToggleButton>
					<ToggleButton value="normal">Normal</ToggleButton>
				</ToggleButtonGroup>
			)}
		</Container>
	)
}

export const ProductListControls = React.memo(ProductListControlsComponent)
