var gulp = require('gulp');
var sass= require('gulp-sass');
var inlineCss = require('gulp-inline-css');
var inky = require('inky');

//style
gulp.task('styles', function(){
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
})

//convert inky
gulp.task('inky', function() {
  return gulp.src('./templates/**/*.html')
    .pipe(inky())
    .pipe(gulp.dest('./dist'))
})

//inline
gulp.task('inline', function(){
  return gulp.src('./dist/*.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('./dist/inlined'))
})

//watch
gulp.task('default', function(){
  gulp.watch('./scss/**/*.scss', ['styles'])
  gulp.watch('./templates/**/*.html',['inky'])
})
