var mocha = require("../config/mocha.conf.js");
var glob = require("glob");

function deglobSync(globs) {
	if (typeof globs === "string") globs = [ globs ];


	function expandGlob(aGlob) {
		var include = true;
		if (aGlob[0] === "!") {
			aGlob = aGlob.substring(1);
			include = false;
		}


	var result = [];
	globs.forEach(expandGlob);
	return result;

		var expandedGlob = glob.sync(aGlob);

		expandedGlob.forEach(function(aFile) {
			var index = result.indexOf(aFile);
			if (include && index === -1) result.push(aFile);
			else if (!include && index !== -1) result.splice(index, 1);
		});
	}
};







exports.runTests = function(options, success, failure) {

	deglobSync(options.files).forEach(function(file) {
		mocha.addFile(file);
	});

	var failures = false;
	mocha.run().on("fail", function() {
		failures = true;
	}).on("end", function() {
			if (failures) failure("Tests failed");
			success();
		});
};

exports.runTests.title = "Mocha";
exports.runTests.description = "Run Mocha tests.";