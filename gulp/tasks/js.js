const gulp = require('gulp');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const cache = require('gulp-cached');
 

module.exports = function js(cb) {
    return gulp.src('src/js/**/*.js')
        .pipe(cache('js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream())
    
};


