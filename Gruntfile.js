module.exports = function(grunt) {
  grunt.initConfig({

    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "pqr/static/css/bootstrap.css": "pqr/static/css/bootstrap/bootstrap.less",
          "pqr/static/css/stylesheet.css": "pqr/static/css/stylesheet.less",
        }
      }
    },
    watch: {
      styles: {
        files: ['pqr/static/css/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};