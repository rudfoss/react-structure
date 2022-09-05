import { useEffect } from "react"
import create from "zustand"
import { devtools } from "zustand/middleware"

export interface PageStore {
	title: string
}

export const usePageStore = create(
	devtools<PageStore>(
		() => ({
			title: ""
		}),
		{
			name: "PageStore"
		}
	)
)

export const useSetPageTitle = (title: string) => {
	useEffect(() => {
		usePageStore.setState({ title })
	}, [title])
}
