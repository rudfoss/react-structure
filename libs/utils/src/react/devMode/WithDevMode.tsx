import React from "react"

import { useDevMode } from "./devModeContext"

export interface WithDevModeProps {
	children: JSX.Element
}

const WithDevModeComponent = ({ children }: WithDevModeProps) => {
	const { devModeEnabled } = useDevMode()
	return devModeEnabled ? children : null
}

export const WithDevMode = React.memo(WithDevModeComponent) as unknown as typeof WithDevModeComponent
