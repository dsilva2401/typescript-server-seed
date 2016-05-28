
var gulp = require('gulp');
var watch = require('gulp-watch');
var typescript = require('gulp-tsc');
var typedoc = require("gulp-typedoc");
var shell = require('shelljs');


gulp.task('build', function () {
	return gulp.src(['app/**/*.ts'])
		.pipe(typescript({ emitOnGlob: false, target: 'es6' }))
		.pipe(gulp.dest('built/'))
});

gulp.task('serve', function () {
	return shell.exec('node built/app.js');
});

gulp.task("docs", function() {
	return gulp
		.src(["app/**/*.ts"])
		.pipe(typedoc({
			module: "commonjs",
			target: "es6",
			out: "docs/",
			name: "My project title"
		}));
});