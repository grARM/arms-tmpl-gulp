var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
// var scss = require('gulp-scss');
var ejs = require('gulp-ejs');
var sass = require('gulp-sass');
var webpack = require('webpack'); // v4.2.0
var webpackConfig = require('./webpack.config.js');
var Q = require('q');

var indexMock = require('./src/mock/index.js');


// js
gulp.task('webpack', function () {
	var deferred = Q.defer();
	webpack(webpackConfig, function (err, states) {
		if (err) {
			deferred.reject();
		} else {
			deferred.resolve();
		}
	});

	return deferred.promise;
});


// sass to css
gulp.task('scss', function () {
	return gulp.src(['./src/scss/index.scss'])
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		// .pipe(rename(function (path) {
		// 	path.dirname = "/";
  //   		// path.basename += "-goodbye";
		// 	path.extname = '.css'
		// }))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('ejs', function () {
	return gulp.src("./src/page/index.ejs")
	    .pipe(ejs(indexMock.page))
	    .pipe(gulp.dest("./dist/page"))
})


gulp.task('default', ['webpack', 'scss', 'ejs'], function() {
  // 将你的默认的任务代码放在这
});