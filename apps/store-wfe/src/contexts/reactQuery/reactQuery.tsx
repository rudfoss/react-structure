import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import React from "react"

import { useLazyRef } from "@react-structure/utils/react/useLazyRef"

const initQueryClient = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5, // 5 minutes
				cacheTime: 1000 * 60 * 60 * 24 // 24 hours
			}
		}
	})

	window._app["queryClient"] = queryClient

	return queryClient
}

export interface ReactQueryProviderProps {
	children: React.ReactNode
}

const ReactQueryProviderComponent = ({ children }: ReactQueryProviderProps) => {
	const queryClientRef = useLazyRef(initQueryClient)

	return (
		<QueryClientProvider client={queryClientRef.current}>
			{children}
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

export const ReactQueryProvider = React.memo(ReactQueryProviderComponent)
