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
		cssmin: { //minify and combine css
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: { //Bootstrap first
					'pqr/static/css/style.min.css': ['pqr/static/css/style.css']
				}
			}
		},
		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: ';\n'
			},
			js: {
				// the files to concatenate (modernizr, then jquery, then bootstrap, then everythign else)
				src: ['assets/js/modernizr/**/*.js', 'assets/js/jquery/**/*.js', 'assets/js/bootstrap/**/*.js', 'assets/js/helpers/**/*.js', 'assets/js/pqr/pqr.js', 'assets/js/pqr/config.js', 'assets/js/**/*.js'],

				// the location of the resulting JS file
				dest: 'pqr/static/js/pqr.js'
			},
			css: {
				// the files to concatenate (modernizr, then jquery, then bootstrap, then everythign else)
				src: ['assets/css/bootstrap.css', 'assets/css/font-awesome.css', 'assets/css/**/*.css'],

				// the location of the resulting JS file
				dest: 'pqr/static/css/style.css'
			}
		},
		uglify: {
			options: {
				// define a string to put between each file in the concatenated output
				banner: '/*! PQR JavaScript Combined and minified on <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				// the files to concatenate
				files: {
					"pqr/static/js/pqr.min.js": ['pqr/static/js/pqr.js']
				}
			}
		},
		autoprefixer: {
			options: {

			},
			development: {
				src: "pqr/static/css/style.css",
				dest: "pqr/static/css/style.css"
			},
		},
		watch: {
			styles: {
				files: ['assets/less/**/*.less'],
				tasks: ['less', 'concat:css', 'autoprefixer'],
				options: {
					nospawn: true
				}
			},
			scripts: {
				files: ['assets/js/**/*.js'],
				tasks: ['concat:js']
			}
		}
	});



	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('default', ['watch']);
};