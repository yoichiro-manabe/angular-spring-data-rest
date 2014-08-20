module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		uglify: {
			options: {
                banner: "/*!\n * <%= pkg.name %> <%= pkg.version %>\n * Copyright <%= grunt.template.today('yyyy') %> Guy Brûlé (@guy_labs)\n * https://github.com/guylabs/angular-spring-data-rest\n */\n"
			},
			build: {
				src: "src/<%= pkg.name %>.js",
                dest: "build/<%= pkg.name %>.<%= pkg.version %>.min.js"
			}
		},
		karma: {
			unit: {
				configFile: "karma.conf.js"
			},
			continuous: {
				configFile: "karma.conf.js",
				singleRun: true
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-karma");

	grunt.registerTask("default", ["karma:continuous", "uglify"]);

	grunt.registerTask("startTestServer", ["karma:unit:start"]);
	grunt.registerTask("runTests", ["karma:unit:run"]);
	grunt.registerTask("test", ["karma:continuous"]);

};
