const gulp = require('gulp')
const rename = require("gulp-rename");

module.exports = function renameIndex(cb) {
    return gulp.src('./build/**/index.html')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./build'));
};

