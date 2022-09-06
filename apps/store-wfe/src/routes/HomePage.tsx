import React from "react"
import { MdOutlineLocalGroceryStore } from "react-icons/md"

import { CenteredLayout } from "@app/layouts"
import { useSetPageTitle } from "@app/store/pageStore"
import { Link } from "@app/ui/Link"

const HomePageComponent = () => {
	useSetPageTitle("Homepage", false)
	return (
		<CenteredLayout>
			<Link to="products">
				<MdOutlineLocalGroceryStore size={128} />
			</Link>
		</CenteredLayout>
	)
}

export const HomePage = React.memo(HomePageComponent)
