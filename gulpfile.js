"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat');
    
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

