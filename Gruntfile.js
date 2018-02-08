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
    sass: {
      dist: {
        files: {
          './css/main.css': './sass/main.scss'
        }
      }
    },
    watch: {
      options: {
        reload: true
      },
      sass: {
        files: ['./sass/**/*.scss'],
        tasks: ['sass']
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

  grunt.registerTask("default", ["jshint", "sass", "browserify", "watch"]);
};