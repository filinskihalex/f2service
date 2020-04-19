const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');

module.exports = function style(cb) {
    return gulp.src('./src/sass/**/*.+(scss|sass)')
        .pipe(sass({outputStyle: "nested"}).on('error', notify.onError()))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/css'))
        
};


