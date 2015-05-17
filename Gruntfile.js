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
    concat: {
  		options: {
  			// define a string to put between each file in the concatenated output
  			separator: ';'
  		},
  		dist: {
  			// the files to concatenate (modernizr, then jquery, then bootstrap, then everythign else)
  			src: ['assets/js/modernizr/**/*.js', 'assets/js/jquery/**/*.js', 'assets/js/bootstrap/**/*.js', 'assets/js/**/*.js'],

  			// the location of the resulting JS file
  			dest: 'pqr/static/js/pqr.js'
  		}
	},    
	uglify: {
		options: {
			// define a string to put between each file in the concatenated output
			banner: '/*! PQR JavaScript Combined and minified on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
		},
		dist: {
			// the files to concatenate
			files:{
				"pqr/static/js/pqr.min.js": ['pqr/static/js/pqr.js']
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
      },
      scripts:{
      	files: ['pqr/static/js/**/*.js'],
      	tasks: ['concat', 'uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['watch']);
};