import { HttpClient } from "../jsonHttpClient"

export interface Product {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	images: string[]
}

export interface ProductResponse {
	limit: number
	skip: number
	size: number
	products: Product[]
}

export interface PagedProducts {
	limit: number
	skip?: number
}

export const productClient =
	(httpClient: HttpClient) =>
	async (page: PagedProducts = { limit: 30 }) => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return await httpClient<ProductResponse>("products", page as any)
	}
