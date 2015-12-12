"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');
    
gulp.task("concatScripts", function(){
  return gulp.src([
    'src/js/utils.js',
    'src/js/synth.js',
    'src/js/interface.js',
    'src/js/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('public/'));
});

gulp.task("compileSass", function(){
  return gulp.src('src/scss/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/'));
});