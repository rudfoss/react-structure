import React from "react"

const formatter = new Intl.DateTimeFormat("nb-no", { dateStyle: "full", timeStyle: "medium" })

export interface FriendlyDateProps {
	children: string | Date
}

const FriendlyDateComponent = ({ children }: FriendlyDateProps) => {
	const dateObj = typeof children === "string" ? new Date(Date.parse(children)) : children
	return <>{formatter.format(dateObj)}</>
}

export const FriendlyDate = React.memo(FriendlyDateComponent)
