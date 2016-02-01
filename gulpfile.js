'use strict';

var gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    cssnano = require('gulp-cssnano'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    glob = require('glob'), //TODO: remove after fix
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    tape = require('gulp-tape'),
    watch = require('gulp-watch');
var paths = {
    source : path.join(__dirname, 'assets/'),
    dist : path.join(__dirname, 'pqr/static/'),
    style: 'style/',
    js: 'js/',
    test: 'test/'
};
//compilation
gulp.task('less', function () {
    watch(paths.source + paths.style + '/**/*.less',{
        ignoreInitial: false
    }, function () {
        gulp.src(paths.source + paths.style + 'main.less')
            .pipe(sourcemaps.init())
            .pipe(less(
            {
                paths: [ path.join(__dirname, 'less', 'includes') ]
            })
                .on('error', gutil.log))
            .pipe(cssnano())
            .pipe(autoprefixer({
                browsers: [
                    'last 2 versions',
                    'android 4',
                    'opera 12'
                ]
            }))
            .pipe(concat('pqr.min.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.dist + paths.style));
    });
});
gulp.task('js', function () {
    //TODO: should be one entry file, i.e. 'main.js'
    var entryFilesGlob = glob.sync(paths.source + paths.js + '/**/*.js');
    watch(paths.source + paths.js + '/**/*.js', {
        ignoreInitial: false
    }, function () {
        browserify({
            entries: entryFilesGlob,
            transform: [babelify]
        })
            .bundle().on('error', gutil.log)
            .pipe(source('main.js'))
            .pipe(jshint())
            .pipe(buffer())
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(concat('pqr.min.js'))
            .pipe(gulp.dest(paths.dist + paths.js));
    });
});
gulp.task('compile', ['less', 'js']);
//test
gulp.task('test', function() {
  return gulp.src(paths.source + paths.test + 'main.test.js')
    .pipe(tape());
});
//default
gulp.task('default', ['compile']);
