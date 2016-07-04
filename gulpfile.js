'use strict';

var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('sass',function(){
	return gulp.src('./public/scss/main.scss').
	pipe(sass()).
	pipe(gulp.dest('./public/css'))
});