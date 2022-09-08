import styled from "@emotion/styled"
import React from "react"
import { MdOutlineLocalGroceryStore } from "react-icons/md"

import { CenteredLayout } from "@app/layouts"
import { useSetPageTitle } from "@app/store/pageStore"

import { Link } from "@react-structure/ui/Link"

const StyledLink = styled(Link)`
	text-align: center;
`

const HomePageComponent = () => {
	useSetPageTitle("Homepage", false)
	return (
		<CenteredLayout>
			<StyledLink to="products">
				<MdOutlineLocalGroceryStore size={128} />
				<p>Visit store</p>
			</StyledLink>
		</CenteredLayout>
	)
}

export const HomePage = React.memo(HomePageComponent)
