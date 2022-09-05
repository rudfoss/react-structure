import type React from "react"

/**
 * Helper function for extracting the text value from a change event.
 * @param onChange The handler to call when the value changes.
 * @param filter An optional filter for the new value.
 */
export const onChange =
	(onChange: (newText: string) => unknown, filter?: (newText: string) => boolean) =>
	(evt: React.ChangeEvent<HTMLInputElement>) => {
		const newText = evt.target.value
		if (filter && !filter(newText)) return
		onChange(newText)
	}

/**
 * OnChange helper equivalent for MUI fields that return the new value as the second argument.
 * @param onChange
 * @param filter
 * @returns
 */
export const onMuiChange =
	(onChange: (newText: string) => unknown, filter?: (newText: string) => boolean) => (_: unknown, newText: string) => {
		if (filter && !filter(newText)) return
		onChange(newText)
	}
