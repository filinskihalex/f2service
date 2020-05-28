const gulp        = require('gulp');
const imagemin = require('gulp-imagemin');
const imgCompress  = require('imagemin-jpeg-recompress');
const browserSync = require('browser-sync');
const cache = require('gulp-cached');


module.exports = function imageMin(cb) {
    return gulp.src('src/img/**/*')
        .pipe(cache('img'))
        .pipe(imagemin([
            imgCompress({
                loops: 4,
                min: 70,
                max: 80,
                quality: 'high'
                }),
            imagemin.gifsicle(),
            imagemin.optipng(),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('build/img'))
        .pipe(browserSync.stream());
};
