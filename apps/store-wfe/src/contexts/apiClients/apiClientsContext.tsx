import React, { createContext, useRef } from "react"

import { productClient } from "@react-structure/clients/dummyJSON"
import { jsonHttpClient } from "@react-structure/clients/jsonHttpClient"
import { createContextUser } from "@react-structure/utils/react/createContextUser"

interface ApiClientsContextProps {
	products: ReturnType<typeof productClient>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ApiClientsContext = createContext<ApiClientsContextProps>(undefined as any)
ApiClientsContext.displayName = "ApiClientsContext"
export const useApiClients = createContextUser(ApiClientsContext)

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
