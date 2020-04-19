const gulp        = require('gulp');
const browserSync = require('browser-sync')


gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "build"
        }
    });

    gulp.watch("build/*.html").on('change', browserSync.reload);
});