var assert = require("assert");
var fs = require("fs");

var currentPath = process.cwd();
var config = require(currentPath + "/tailwind.config.js");
config.output = "test/";
// require(__dirname.replace("test", "src/"));

function fileExists() {
	try {
		if (fs.existsSync(__dirname + "/styles.css")) {
			console.log("it exists");

			return true;
		}
	} catch (err) {
		console.error(err);
	}
}

function fileExists2() {
	fs.access(__dirname + "/styles.css", fs.F_OK, err => {
		if (err) {
			console.error(err);
			return;
		}
		console.log("it exists");
	});
}

describe("tailwind", function() {
	it("should output style.css file");
});
