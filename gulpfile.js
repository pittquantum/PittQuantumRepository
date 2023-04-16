'use strict';

const gulp = require('gulp'),
    path = require('path'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less'),
    cssnano = require('gulp-cssnano'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    tape = require('gulp-tape'),
    watch = require('gulp-watch');

const paths = {
    source: path.join(__dirname, 'assets/'),
    dist: path.join(__dirname, 'pqr/static/'),
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
    watch(paths.source + paths.js + '/**/*.js', {
        ignoreInitial: false
    }, function () {
        browserify({
            entries: paths.source + paths.js + 'main.js',
            transform: [[babelify, {
                //TODO: until it's a module, ignore 3dmol
                ignore: [paths.source + paths.js + '3DMol/3Dmol-nojquery.js'],

                presets: ['es2015']
            }]]
        })
            .bundle().on('error', gutil.log)
            .pipe(source('pqr.min.js'))
            .pipe(jshint())
            .pipe(buffer())
            //TODO: how to work this with console...
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.dist + paths.js));
    });
});
gulp.task('compile', gulp.series('less', 'js'));
//test
gulp.task('test', function() {
  return gulp.src(paths.source + paths.test + 'main.test.js')
    .pipe(tape());
});
//default
gulp.task('default', gulp.series('compile'));
