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
                    require('pixrem')(), // add fallbacks for rem units
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
            prod: {
                options: {
                    // define a string to put between each file in the concatenated output
                    banner: '/*! PQR PROD JavaScript Combined and minified on <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                    compress: {
                        drop_console: true, //Don't display any console output for production 
                    }
                },
                files: {
                    "pqr/static/js/pqr.min.js": ['pqr/static/js/pqr.js']
                }
            },
            dev: {
                options: {
                    // define a string to put between each file in the concatenated output
                    banner: '/*! PQR DEV JavaScript Combined and minified on <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                    compress: {},
                    beautify: true
                },
                files: {
                    "pqr/static/js/pqr.min.js": ['pqr/static/js/pqr.js']
                }
            }
        },
        focus:{ //Only Run a subset of watch events for production or dev
            dev:{
                include: ['styles_dev', 'scripts_dev', 'configFiles']
            },
            prod:{
                include: ['styles_prod', 'scripts_prod', 'configFiles']
            }
        },
        watch: { //Which folders to watch for changes and run only the tasks required
            styles_prod: {
                files: ['assets/less/**/*.less'],
                tasks: ['less', 'concat:css', 'postcss'],
                options: {
                    nospawn: true
                }
            },
            styles_dev: {
                files: ['assets/less/**/*.less'],
                tasks: ['less', 'concat:css', 'postcss'],
                options: {
                    nospawn: true
                }
            },
            scripts_prod: {
                files: ['assets/js/**/*.js'],
                tasks: ['concat:js', 'uglify:prod']
            },
            styles_dev: {
                files: ['assets/js/**/*.js'],
                tasks: ['concat:js', 'uglify:dev']
            },
            configFiles: {
                files: ['Gruntfile.js', 'package.json'],
                options: {
                    reload: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['focus:prod']);

    grunt.registerTask('prod', ['less', 'concat:css', 'concat:js', 'postcss', 'uglify:prod']);
    grunt.registerTask('prod_watch', ['focus:prod']);

    grunt.registerTask('dev', ['less', 'concat:css', 'concat:js', 'postcss', 'uglify:dev']);
    grunt.registerTask('dev_watch', ['focus:dev']);



};