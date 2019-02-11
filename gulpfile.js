'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var browserSync = require('browser-sync').create();

// Sass
gulp.task('sass', function () {
    return gulp.src('sass/*.scss') // Gets all files ending with .scss in scss and children dirs
        .pipe(sass({outputStyle: 'compact',}))
        .pipe(postcss([ autoprefixer() ]))
        .pipe(rename({ basename: "style"}))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({ stream: true }));
});

// Sass
gulp.task('js', function () {
    return gulp.src('js/*.js') // Gets all files ending with .scss in scss and children dirs
        .pipe(uglify())
        .pipe(rename({ basename: "script"}))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({ stream: true }));
});

// Static Server + watching scss/html files
gulp.task('watch', function() {
    browserSync.init({
        server: { baseDir: './'},
        port:3000
    });
    gulp.watch('sass/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/*.js', gulp.series('js'));
});
