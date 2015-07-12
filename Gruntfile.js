module.exports = function(grunt) {

    grunt.initConfig({
        //Less Comilation Options 
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
        postcss: {
            options: {
                map: {
                    inline: false, // save all sourcemaps as separate files...
                    annotation: 'assets/css/maps' // ...to the specified directory
                },
                // safe: true,
                processors: [
                    require('pixrem')(),// add fallbacks for rem units
                    require('autoprefixer-core')({
                        browsers: 'last 2 versions'
                    }), // add vendor prefixes
                    require('cssnano')(), // minify the result
                    require('cssnext')() // Plugins to use future CSS features now by adding backwards compatibility css processing
                ]
            },
            dist: {
                files: {
                    "pqr/static/css/pqr.min.css": ['assets/css/pqr.css']
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
                // 
                src: ['assets/css/bootstrap.css', 'assets/css/**/*.css', '!assets/css/maps', '!assets/css/pqr.css'],
                // the location of the resulting CSS file
                dest: 'assets/css/pqr.css'
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
        watch: {
            styles: {
                files: ['assets/less/**/*.less'],
                tasks: ['less', 'concat:css', 'postcss'],
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
    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('prod', ['less', 'concat:css', 'concat:js', 'postcss', 'uglify']);
    grunt.registerTask('dev', ['less', 'concat:css', 'concat:js', 'postcss']);
};