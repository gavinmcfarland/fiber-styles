const _ = require("lodash");

module.exports = function({ addUtilities, theme }) {
	const fontStyles = theme("color.theme", {});
	const utilities = _.map(fontStyles, (decl, name) => {
		var props = {};
		_.map(decl, (value, prop) => {
			props["--" + prop] = value;
		});

		return {
			[`.color-theme-${name}`]: props
		};
	});

	addUtilities(utilities);
};
