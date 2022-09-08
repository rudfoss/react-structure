import React from "react"

export interface AlertProps {
	children: React.ReactNode
}

const AlertComponent = ({ children }: AlertProps) => {
	return <div style={{ padding: 12, border: "#c21a1a", backgroundColor: "#ffa9a9" }}>{children}</div>
}

export const Alert = React.memo(AlertComponent)
