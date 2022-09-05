/* eslint-disable @typescript-eslint/no-explicit-any */
import { nanoid } from "nanoid"
import { useEffect, useRef } from "react"

import { setMerger } from "../setMerger"
import { useLazyRef } from "./useLazyRef"

/**
 * Monitor a value and logs when it changes (uses Object.is to determine equality)
 */
export const useValueMonitor = (value: unknown, name = "Value") => {
	const lastValue = useLazyRef(() => {
		console.log(`valueMonitor: init ${name}`, { value })
		return value
	})
	useEffect(() => {
		if (!Object.is(lastValue.current, value)) {
			console.log(`valueMonitor: change ${name}`, { old: lastValue.current, new: value })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])
}

/**
 * Monitors each property of an object and reports any changed properties when there are some. Note that the object itself
 * must follow immutable rules and change whenever one or more properties change.
 * @param value
 * @param name
 */
export const useObjectValueMonitor = (value: Record<string, unknown>, name?: string) => {
	const objName = useLazyRef(() => name ?? nanoid())
	const lastValueObj = useRef(value)
	useEffect(() => {
		if (Object.is(value, lastValueObj.current)) return
		const lastChangedValues: Record<string, { old: unknown; new: unknown }> = {}
		const w: any = window // Hack to be able to set property on window
		let hasChanges = false
		const allKeys = setMerger(new Set(Object.keys(lastValueObj.current)))(Object.keys(value)).set
		for (const key of allKeys) {
			const oldVal = lastValueObj.current[key]
			const newVal = value[key]
			if (Object.is(newVal, oldVal)) {
				continue
			}

			hasChanges = true
			lastChangedValues[key] = { new: newVal, old: oldVal }
		}
		lastValueObj.current = value
		if (hasChanges) {
			w._lastChangedValues = w._lastChangedValues ?? {}
			w._lastChangedValues[objName.current] = lastChangedValues
			console.log(`objectValueMonitor: ${objName.current} changed`, { lastChangedValues })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])
}
