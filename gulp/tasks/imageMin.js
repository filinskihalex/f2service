const gulp        = require('gulp');
const imagemin = require('gulp-imagemin');



module.exports = function imageMin(cb) {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'));
};
