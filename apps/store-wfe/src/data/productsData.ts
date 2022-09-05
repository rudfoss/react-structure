import { useQuery } from "@tanstack/react-query"

import { useApiClients } from "@app/contexts/apiClients/apiClientsContext"

import { PagedProducts, Product } from "@react-structure/clients/dummyJSON"

export const productsDataKeys = {
	all: ["all"] as const,
	paged: (page: PagedProducts) => [...productsDataKeys.all, page] as const,
	byId: (id: Product["id"]) => [...productsDataKeys.all, "byId", id] as const
} as const

export const useProductsData = (page: PagedProducts = { limit: 30 }) => {
	const { products } = useApiClients()
	return useQuery(productsDataKeys.paged(page), async () => (await products(page)).products)
}
