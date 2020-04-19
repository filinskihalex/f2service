const gulp = require('gulp');

module.exports = function mailer(cb) {
    return gulp.src('src/mailer/**/*')
        .pipe(gulp.dest('build/mailer'));
};