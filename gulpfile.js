var path = require('path');
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var rimraf = require('gulp-rimraf');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');

var webpackConfigPath = './webpack.config.js';

gulp.task('default', ['nodemon']);

gulp.task('clean', ['clean:sass', 'clean:js']);

gulp.task('clean:sass', ['clean:appStyle', 'clean:siteStyle']);

gulp.task('clean:appStyle', function() {
  return gulp.src('./public/css/style.css', {read: false})
        .pipe(rimraf());
});

gulp.task('clean:siteStyle', function() {
  return gulp.src('./public/css/site.css', {read: false})
        .pipe(rimraf());
});

gulp.task('clean:js', function(cb) {
  return gulp.src('./public/js/**/*', {read: false})
        .pipe(rimraf());
});

gulp.task('sass', ['sass:app', 'sass:site']);

gulp.task('sass:app', ['clean:appStyle'], function () {
  var input = './client/style.scss';
  var output = './public/css/';
  return gulp
        .src(input)
        .pipe(sass())
        .pipe(gulp.dest(output));
});

gulp.task('sass:site', ['clean:siteStyle'], function () {
  var input = './server/css/site.scss';
  var output = './public/css/';
  return gulp
        .src(input)
        .pipe(sass())
        .pipe(gulp.dest(output));
});

gulp.task('webpack', ['clean:js', 'sass'], function() {
  var webpackConfig = require(webpackConfigPath);
  return gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('build', ['webpack'], function() {
  return gulp.watch([
    './client/**/*.scss',
    './client/**/*.js'
  ], ['webpack']);
});

gulp.task('nodemon', ['build'], function () {
  return nodemon({
    script: './bin/www',
    ignore: ['node_modules/**'],
    ext: 'js html scss css',
    env: {
      NODE_PATH: __dirname
    }
  });
});
