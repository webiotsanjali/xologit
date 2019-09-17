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
            //outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('assets/css'))
        .pipe(bs.reload({stream: true}));
});

// pug to html
gulp.task('pug', function () {
      return gulp.src('assets/pug/pages/ltr/general-widget.pug')
        .pipe(pug({ pretty: true }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('ltr'))
        .pipe(bs.reload({stream: true}));
});

//compress images
gulp.task('image', function () {
    gulp.src('assets/virtual_images/*/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('assets/images'))
});

//Html validator
// gulp.task('validateHtml', function () {
//     function handleFile(file, encoding, callback) {
//         callback(null, file);
//         if (!file.w3cjs.success)
//             throw new Error('HTML validation error(s) found');
//     };
//     return gulp.src('ltr/*.html')
//         .pipe(htmlValidator())
//         .pipe(through2.obj(handleFile));
// });

// gulp.task('watch', function () {
//     gulp.watch('assets/scss/**/*.scss', ['sass']);
//     gulp.watch('assets/pug/pages/**/*.pug', ['pug']);
//     // gulp.watch('assets/virtual_images/*/*.*', ['image']);
//     //gulp.watch('ltr/*.html', ['validateHtml']);
//     gulp.watch("*.html").on('change', bs.reload);
// });

gulp.task('browser-sync', function() {
    bs.init({
        proxy: "home/savan/Desktop/xologit/theme/alert.html"});
});

//gulp.task('default', [ 'sass', 'pug', 'image', 'watch', 'browser-sync', 'validateHtml' ]);
gulp.task('default', [ 'sass', 'pug', 'browser-sync']);
