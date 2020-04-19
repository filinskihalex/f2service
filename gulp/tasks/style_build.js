const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css')
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const shorthand = require('gulp-shorthand');


module.exports = function style_build(cb) {
    return gulp.src('./src/sass/**/*.+(scss|sass)')
        .pipe(sass({outputStyle: "compressed"}).on('error', notify.onError()))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(sourcemaps.init())
        .pipe(shorthand())
        .pipe(cleanCSS({compatibility: '*' , 
            level: { 1: { specialComments: false } } 
            }
            ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream());
};