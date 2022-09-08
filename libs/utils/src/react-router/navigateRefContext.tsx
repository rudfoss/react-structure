import React, { createContext, useMemo, useRef } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"

import { createContextUser } from "../react/createContextUser"

interface NavigateRefContextProps {
	navRef: React.MutableRefObject<NavigateFunction>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavigateRefContext = createContext<NavigateRefContextProps>(undefined as any)
NavigateRefContext.displayName = "NavigateRefContext"

/**
 * Use the closest navigate ref context.
 */
export const useNavigateRef = createContextUser(NavigateRefContext)

interface NavigateRefProviderProps {
	children: React.ReactNode
}

const NavigateRefProviderComponent = ({ children }: NavigateRefProviderProps) => {
	const nav = useNavigate()
	const navRef = useRef(nav)
	navRef.current = nav

	const value = useMemo(() => ({ navRef }), [navRef])

	return <NavigateRefContext.Provider value={value}>{children}</NavigateRefContext.Provider>
}

/**
 * Provides a stable reference to useNavigate within the routing context in which it is registered.
 * Use this to save on re-renders when a component doesn't care about sub-path navigations.
 *
 * **Important**: For this to work correctly the provider **MUST** be specified in the same routing context as the component that uses it
 * If these do not match then navigations will not apply relative path navigations correctly.
 *
 * **Why?**
 * https://github.com/remix-run/react-router/issues/7634
 */
export const NavigateRefProvider = React.memo(NavigateRefProviderComponent)
