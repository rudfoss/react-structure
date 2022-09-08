import MUILink, { LinkProps as MUILinkProps } from "@mui/material/Link"
import React from "react"
import { NavLink, Link as RouterLink } from "react-router-dom"

export interface LinkProps extends MUILinkProps {
	to: string
	navLink?: boolean
}

const LinkComponent = ({ navLink, ...rest }: LinkProps) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return <MUILink component={(navLink ? NavLink : RouterLink) as any} {...rest} />
}

export const Link = React.memo(LinkComponent)
