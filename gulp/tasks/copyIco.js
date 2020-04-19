const gulp = require('gulp');

module.exports = function icons(cb) {
    return gulp.src('src/icons/**/*')
        .pipe(gulp.dest('build/icons'));
};