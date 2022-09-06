import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import React, { useEffect } from "react"
import { MdHome } from "react-icons/md"
import { useNavigate } from "react-router-dom"

import { usePageStore } from "@app/store/pageStore"

const HeaderComponent = () => {
	const nav = useNavigate()
	const { title, homeBtn } = usePageStore(({ title, homeBtn }) => ({ title, homeBtn }))
	useEffect(() => {
		window.document.title = title
	}, [title])

	const goHome = () => {
		nav("/")
	}

	return (
		<AppBar position="static">
			<Toolbar>
				{homeBtn && (
					<IconButton size="large" edge="start" color="inherit" onClick={goHome}>
						<MdHome />
					</IconButton>
				)}
				<Typography variant="h6" component="div">
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export const Header = React.memo(HeaderComponent)
