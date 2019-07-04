module.exports = {
	corePlugins: {
		maxWidth: false,
		fontFamily: false
	},
	plugins: [
		require("./plugins/fontStyle"),
		require("./plugins/colorTheme"),
		require("./plugins/maxWidth"),
		require("./plugins/assetFont")
	]
};
