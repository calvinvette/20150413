/*
 * npm install -g gulp gulp-uglifyjs gulp-concat gulp-less gule-livereload gulp-clean gulp-util gulp-rename
 *
 *
 *
 */

var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var less = require('gulp-less'),
var livereload = require('gulp-livereload');
 
gulp.task('uglify', function() {
  gulp.src('public/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

 
gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

 
gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('less/*.less', ['less']);
});
