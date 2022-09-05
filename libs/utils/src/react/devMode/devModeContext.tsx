import React, { createContext, useEffect } from "react"

import { createContextUser } from "../createContextUser"
import { useBrowserStore } from "../useBrowserStore"
import { useShortcut } from "../useShortcut"

/**
 * This context controls whether dev mode is enabled. Used to show/hide developer tools.
 */
interface DevModeContextProps {
	devModeEnabled: boolean
	setDevMode: (mode?: boolean) => unknown
}

const DevModeContext = createContext<DevModeContextProps>(undefined as never)
DevModeContext.displayName = "DevModeContext"

export const useDevMode = createContextUser(DevModeContext)

interface DevModeProviderProps {
	/**
	 * Provide a short name for your application to use as a local storage key and optionally a global window object name. The state of the dev mode context will be stored in local storage under the provided name and `window[name]` will be logged to the console when dev mode is enabled.
	 * @default "appDevMode"
	 */
	name?: string
	/**
	 * Specify the shortcut key to use to toggle dev mode.
	 * @default Ctrl+Alt+D
	 */
	shortcutKey?: string
	children: React.ReactNode
}

const DevModeProviderComponent = ({
	name = "appDevMode",
	shortcutKey = "Ctrl+Alt+D",
	children
}: DevModeProviderProps) => {
	const appName = name.replace(/[^a-z0-9-_]/gi, "")
	const [devModeEnabled, setEnabled] = useBrowserStore(`${appName}-devMode`, false)
	const setDevMode = (mode?: boolean) => {
		if (mode === undefined) {
			mode = !devModeEnabled
		}
		setEnabled(mode)
	}

	useShortcut(shortcutKey, () => setDevMode())
	useEffect(() => {
		if (devModeEnabled) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const appObj = (window as any)[appName]
			if (appObj) {
				console.log(`Dev mode enabled, window.${appName}`, appObj)
			} else {
				console.log("Dev mode enabled")
			}
		} else {
			console.log("Dev mode disabled")
		}
	}, [devModeEnabled])

	return <DevModeContext.Provider value={{ devModeEnabled, setDevMode }}>{children}</DevModeContext.Provider>
}

/**
 * Provides a simple toggle to enable/disable developer mode throughout the application.
 */
export const DevModeProvider = React.memo(DevModeProviderComponent)
