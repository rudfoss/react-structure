import { Dispatch, SetStateAction } from "react"

/**
 * Shorthand type for specifying a state tuple returned from `useState`
 */
export type StateTuple<T> = [T, Dispatch<SetStateAction<T>>]
