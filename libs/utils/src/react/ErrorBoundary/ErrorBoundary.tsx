/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"

import { JSXError } from "../JSXError"
import { Alert } from "./Alert"

interface IFormErrorProps {
	message?: string
	onError?: (error: unknown) => JSX.Element
	children: React.ReactNode
}

interface IFormErrorState {
	hasError: boolean
	error?: unknown
	message?: string | JSX.Element
}

/**
 * Renders an error message or handler for React errors. Supports JSXErrors with JSX messages.
 */
export class ErrorBoundary extends React.PureComponent<IFormErrorProps, IFormErrorState> {
	public override state: IFormErrorState = {
		hasError: false
	}

	public static getDerivedStateFromError(error: any) {
		return {
			error,
			hasError: true,
			message: (error instanceof JSXError ? error.jsxMessage : undefined) ?? error?.message
		}
	}

	public override componentDidCatch(error: any) {
		console.error(error)
	}

	private renderError() {
		return (
			<Alert>
				{this.props.message ?? this.state.message ?? "An error has occurred. See console for more information"}
			</Alert>
		)
	}

	public override render() {
		if (this.state.hasError) {
			return this.props.onError?.(this.state.error) ?? this.renderError()
		}

		return this.props.children
	}
}

/**
 * Wraps an `<Outlet/>` in an error boundary to capture errors as part of a route.
 * @returns
 */
export const ErrorBoundaryRoute = ({ children, ...rest }: Partial<IFormErrorProps>) => (
	<ErrorBoundary {...rest}>{children}</ErrorBoundary>
)
