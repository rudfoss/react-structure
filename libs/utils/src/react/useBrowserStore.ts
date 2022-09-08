import { useCallback, useEffect, useRef, useState } from "react"

const getValueFromStore = (key: string, store?: Storage) => {
	const rawValue = store?.getItem(key) ?? null
	if (rawValue !== null) {
		return JSON.parse(rawValue)
	}
	return undefined
}

/**
 * Provides a `useState` like API on top of local storage or session storage.
 * @param key
 * @param defaultValue
 * @returns
 */
export const useBrowserStore = <TValueType>(
	key: string,
	defaultValue: TValueType,
	store: "local" | "session" = "local"
) => {
	const storeApi = useRef<Storage>()

	const [value, setRawValue] = useState<TValueType>(() => getValueFromStore(key, storeApi.current) ?? defaultValue)

	const setValue = useCallback(
		(newValue: TValueType) => {
			storeApi.current?.setItem(key, JSON.stringify(newValue))
			setRawValue(newValue)
		},
		[key, storeApi]
	)

	useEffect(() => {
		storeApi.current = store === "local" ? window.localStorage : window.sessionStorage
		setRawValue(getValueFromStore(key, storeApi.current) ?? value ?? defaultValue)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [store])

	return [value, setValue] as const
}
