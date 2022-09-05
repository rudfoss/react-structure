import styled from "@emotion/styled"
import React from "react"

const H1 = styled.h1`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
	font-size: 42px;
	color: hotpink;
`

const AppComponent = () => {
	return <H1>Hello world</H1>
}

export const App = React.memo(AppComponent)
