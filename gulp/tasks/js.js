const gulp = require('gulp');
const browserSync = require('browser-sync');

module.exports = function icons(cb) {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream());
};