import { concatUrls } from "@react-structure/utils/concatUrls"

export type HttpClient = <TResult>(path: string, query?: Record<string, string>) => Promise<TResult>

export class HTTPClientError extends Error {
	public constructor(public readonly request: Request, public readonly response?: Response) {
		super(`Error ${request.method} ${request.url}`)
	}
}

/**
 * Creates a new, very simple http client.
 * @param baseUrl
 * @param baseHeaders
 * @returns
 */
export const jsonHttpClient =
	(baseUrl: string, baseHeaders: Record<string, string> = {}): HttpClient =>
	async <TResult>(path: string, query: Record<string, unknown> = {}): Promise<TResult> => {
		const queryParams = new URLSearchParams()
		for (const [key, value] of Object.entries(query)) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			queryParams.set(key, (value as any).toString())
		}

		const fullUrl = `${concatUrls([baseUrl, path])}?${queryParams.toString()}`
		const request = new Request(fullUrl, {
			headers: {
				"content-type": "application/json",
				...baseHeaders
			}
		})
		const response = await fetch(request)

		if (!response.ok) {
			throw new HTTPClientError(request, response)
		}

		return response.json()
	}
