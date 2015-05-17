module.exports = function(grunt) {
  grunt.initConfig({

    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "assets/css/bootstrap.css": "assets/less/bootstrap/bootstrap.less",
          "assets/css/stylesheet.css": "assets/less/stylesheet.less", 
        }
      }
    },
    cssmin:{//minify and combine css
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: { //Bootstrap first
          'pqr/static/css/style.min.css': ['assets/css/bootstrap.css', 'assets/css/font-awesome.css', 'assets/css/**/*.css']
        }
      }
    },
    concat: {
  		options: {
  			// define a string to put between each file in the concatenated output
  			separator: ';\n'
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
        files: ['pqr/static/css/**/*.less'], 
        tasks: ['less', 'cssmin'],
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['watch']);
};