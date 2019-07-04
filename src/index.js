const fs = require("fs");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
var decache = require("decache");

var currentPath = process.cwd();
var configPath = currentPath + "/tailwind.config.js";
var config = require(currentPath + "/tailwind.config.js");

config.output = config.output || "static/";

function processTailwindCSS() {
	fs.readFile(__dirname + "/styles/tailwind.css", (err, css) => {
		postcss([tailwindcss(__dirname + "/tailwind.config.js")])
			.process(css, {
				from: __dirname + "/src/styles/tailwind.css",
				to: currentPath + "/" + config.output + "/styles.css"
			})
			.then(result => {
				fs.writeFile(
					currentPath + "/" + config.output + "styles.css",
					result.css,
					() => true
				);

				if (result.map) {
					fs.writeFile(
						currentPath + "/" + config.output + "styles.css.map",
						result.map,
						() => true
					);
				}
			});
	});
}

processTailwindCSS();
decache(currentPath + "/tailwind.config.js");

fs.watch(configPath, { recursive: true }, () => {
	decache(currentPath + "/tailwind.config.js");
	processTailwindCSS();
});
