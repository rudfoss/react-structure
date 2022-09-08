import { useEffect } from "react"
import create from "zustand"
import { devtools } from "zustand/middleware"

export interface PageStore {
	title: string
	homeBtn: boolean
}

export const usePageStore = create(
	devtools<PageStore>(
		() => ({
			title: "",
			homeBtn: false
		}),
		{
			name: "PageStore"
		}
	)
)

export const useSetPageTitle = (title?: string, homeBtn?: boolean) => {
	useEffect(() => {
		if (title === undefined) return
		usePageStore.setState((prev) => ({ title, homeBtn: homeBtn ?? prev.homeBtn }))
	}, [title, homeBtn])
}
