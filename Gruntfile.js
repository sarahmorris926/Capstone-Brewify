module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      files: {
        src: "./app/**/*.js",
        dest: "./dist/app.js"
      }
    },
    jshint: {
      options: {
        predef: ["document", "console", "alert"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      },
      files: ["./app/**/*.js"]
    },
    watch: {
      options: {
        reload: true
      },
      javascripts: {
        files: ["./app/**/*.js"],
        tasks: ["jshint", "browserify"]
      }
    }
  });

  require("matchdep")
    .filter("grunt-*")
    .forEach(grunt.loadNpmTasks);

  grunt.registerTask("default", ["jshint", "browserify", "watch"]);
};