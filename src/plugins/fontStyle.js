const _ = require("lodash");

module.exports = function({ addUtilities, theme }) {
	const fontStyles = theme("font.style", {});
	const utilities = _.map(fontStyles, (decl, name) => {
		var props = {};
		_.map(decl, (value, prop) => {
			props[prop] = value;
		});
		return {
			[`.text-style-${name}`]: props
		};
	});

	addUtilities(utilities);
};
