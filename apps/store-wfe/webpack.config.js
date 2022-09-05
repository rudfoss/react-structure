const { merge } = require("webpack-merge")

module.exports = (config) => {
	const mergedConfig = merge(config, {
		devtool: "source-map"
	})

	if (mergedConfig.mode === "development") {
		mergedConfig.plugins = mergedConfig.plugins.filter((plugin) => {
			if (plugin.constructor?.toString().includes("ForkTsCheckerWebpackPlugin")) {
				console.log("Webpack: Remove ForkTsCheckerWebpackPlugin")
				return false
			}
			return true
		})
	}

	return mergedConfig
}
