'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    htmlValidator = require('gulp-w3c-html-validator'),
    through2 =      require('through2'),
    bs = require('browser-sync').create();
sass.compiler = require('node-sass');

// Scss to css
gulp.task('sass', function () {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('assets/css'))
        .pipe(bs.reload({stream: true}));
});

// pug to html
gulp.task('pug', function () {
      return gulp.src('assets/pug/pages/theme/index.pug')
        .pipe(pug({ pretty: true }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('theme'))
        .pipe(bs.reload({stream: true}));
});


gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('assets/pug/pages/**/*.pug', ['pug']);
    gulp.watch('assets/virtual_images/*/*.*', ['image']);
    //gulp.watch('ltr/*.html', ['validateHtml']);
    gulp.watch("*.html").on('change', bs.reload);
});

gulp.task('browser-sync',['watch'], function() {
    bs.init({
        proxy: "localhost/xologit/theme/index.html"});
});

//gulp.task('default', [ 'sass', 'pug', 'image', 'watch', 'browser-sync', 'validateHtml' ]);
gulp.task('default', [ 'sass', 'pug', 'watch']);
