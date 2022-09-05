const extractMessage = (errorOrMessage: unknown) => {
	if (typeof errorOrMessage === "string") return errorOrMessage
	if (errorOrMessage instanceof Error) return errorOrMessage.message
	if (typeof errorOrMessage === "object") return Object.toString.call(errorOrMessage)
	return "JSX Error"
}

/**
 * An error class that supports JSX messages. Usefull when throwing to JSX error handlers
 */
export class JSXError extends Error {
	public readonly innerError?: Error
	constructor(
		public readonly jsxMessage?: string | JSX.Element,
		plainTextMessageOrInnerError?: string | Error | unknown
	) {
		super(extractMessage(plainTextMessageOrInnerError))

		if (plainTextMessageOrInnerError instanceof Error) {
			this.innerError = plainTextMessageOrInnerError
			this.stack = this.innerError.stack
		}
	}
}
