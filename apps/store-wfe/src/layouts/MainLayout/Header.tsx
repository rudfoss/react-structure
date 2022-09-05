import { AppBar, Toolbar, Typography } from "@mui/material"
import React, { useEffect } from "react"

import { usePageStore } from "@app/store/pageStore"

const HeaderComponent = () => {
	const title = usePageStore(({ title }) => title)
	useEffect(() => {
		window.document.title = title
	}, [title])

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div">
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export const Header = React.memo(HeaderComponent)
