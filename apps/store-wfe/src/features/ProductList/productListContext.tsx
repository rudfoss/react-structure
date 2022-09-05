/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState } from "react"

import { createContextUser } from "@react-structure/utils/react/createContextUser"
import { StateTuple } from "@react-structure/utils/ts"

import { ProductListProps } from "./ProductList"
import { ProductListCardsProps } from "./ProductListCards"
import { ProductListTableProps } from "./ProductListTable"

interface ProductListContextProps {
	displayMode: StateTuple<ProductListProps["displayMode"]>
	cardModeSize: StateTuple<ProductListCardsProps["size"]>
	tableModeSize: StateTuple<ProductListTableProps["size"]>
}

const ProductListContext = createContext<ProductListContextProps>({} as any)
ProductListContext.displayName = "ProductListContext"
export const useProductListContext = createContextUser(ProductListContext)
export const useProductListContextUndefined = createContextUser<Partial<ProductListContextProps>>(
	ProductListContext as any,
	false
)

export interface ProductListProviderProps {
	initialDisplayMode?: ProductListProps["displayMode"]
	initialCardModeSize?: ProductListCardsProps["size"]
	initialTableModeSize?: ProductListTableProps["size"]
	children: React.ReactNode
}

const ProductListProviderComponent = ({
	initialDisplayMode = "cards",
	initialCardModeSize = "medium",
	initialTableModeSize = "medium",
	children
}: ProductListProviderProps) => {
	const displayMode = useState<ProductListProps["displayMode"]>(initialDisplayMode)
	const cardModeSize = useState<ProductListCardsProps["size"]>(initialCardModeSize)
	const tableModeSize = useState<ProductListTableProps["size"]>(initialTableModeSize)

	return (
		<ProductListContext.Provider value={{ displayMode, cardModeSize, tableModeSize }}>
			{children}
		</ProductListContext.Provider>
	)
}

export const ProductListProvider = React.memo(ProductListProviderComponent)
