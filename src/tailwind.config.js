var currentPath = process.cwd();

module.exports = {
	...require(currentPath + "/tailwind.config.js"),
	...require(__dirname + "/plugins")
};
