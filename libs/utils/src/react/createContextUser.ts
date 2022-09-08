import { Context, useContext } from "react"

/**
 * Create a `useContext` function that throws if the context has not been provided yet.
 * @param context
 * @param mustInitialize
 * @returns
 */
export const createContextUser =
	<TValue>(context: Context<TValue>, mustInitialize = true, customError?: string) =>
	() => {
		const ctx = useContext(context)
		if (!ctx && mustInitialize) throw new Error(customError ?? `${context.displayName} must be provided before use`)
		return ctx
	}
