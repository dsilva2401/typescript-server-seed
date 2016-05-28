
var gulp = require('gulp');
var watch = require('gulp-watch');
var typescript = require('gulp-tsc');
var shell = require('shelljs');


gulp.task('build', function () {
	return gulp.src(['app/**/*.ts'])
		.pipe(typescript({ emitOnGlob: false, target: 'es6' }))
		.pipe(gulp.dest('built/'))
});

gulp.task('serve', function () {
	return shell.exec('node built/app.js');
});