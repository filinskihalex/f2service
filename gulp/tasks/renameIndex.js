const gulp = require('gulp')
const rename = require("gulp-rename");
const browserSync = require('browser-sync');

module.exports = function renameIndex(cb) {
    return gulp.src('./build/pages/index.*')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
};

