import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import { CommentComponent } from "./Comment"

describe("Comment", () => {
	it("is defined", () => {
		expect(typeof Comment).toBe("function")
	})

	it("has a remove button if remove function provided", () => {
		const onRemove = jest.fn()
		render(
			<CommentComponent
				comment={{ id: "id", text: "example comment", timestamp: new Date().toISOString() }}
				onRemove={onRemove}
			/>
		)
		expect(screen.getByRole("button")).toHaveAttribute("title", "Remove comment")
	})
})
