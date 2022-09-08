import React, { createContext, useContext, useRef } from "react"

import { productClient } from "@react-structure/clients/dummyJSON"
import { jsonHttpClient } from "@react-structure/clients/jsonHttpClient"

interface ApiClientsContextProps {
	products: ReturnType<typeof productClient>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ApiClientsContext = createContext<ApiClientsContextProps>(undefined as any)
ApiClientsContext.displayName = "ApiClientsContext"
export const useApiClients = () => {
	const ctx = useContext(ApiClientsContext)
	if (!ctx) {
		throw new Error("Did you forget to provide ApiClientsContext?")
	}
	return ctx
}

export interface ApiClientsProviderProps {
	children: React.ReactNode
}

const ApiClientsProviderComponent = ({ children }: ApiClientsProviderProps) => {
	const clients = useRef<ApiClientsContextProps>({
		products: productClient(jsonHttpClient("https://dummyjson.com"))
	})

	return <ApiClientsContext.Provider value={clients.current}>{children}</ApiClientsContext.Provider>
}

export const ApiClientsProvider = React.memo(ApiClientsProviderComponent)
