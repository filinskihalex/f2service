const gulp = require('gulp');
const browserSync = require('browser-sync');

module.exports = function fonts(cb) {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('build/fonts'))
        .pipe(browserSync.stream());
};
