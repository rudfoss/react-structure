import React from "react"

import { useSetPageTitle } from "@app/store/pageStore"
import { Link } from "@app/ui/Link"

const HomePageComponent = () => {
	useSetPageTitle("Homepage")
	return <Link to="products">Products</Link>
}

export const HomePage = React.memo(HomePageComponent)
