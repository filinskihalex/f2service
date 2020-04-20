const gulp        = require('gulp');
const browserSync = require('browser-sync');
const pug2html = require('./pug2html');
const pug_build = require('./pug_build');
const rename = require('./renameIndex')
const style = require('./style')
const style_build = require('./style_build')
const copyIco = require('./copyIco')
const copyFonts = require('./copyFonts')
const copyMailer = require('./copyMailer')
const imageMin = require('./imageMin')
const js = require('./js')

module.exports = function serverWeb(cb) {
    browserSync({
                server: {
                    baseDir: "build"
                }
            });

    gulp.watch("./src/pug/page/**/*.pug", gulp.series(pug2html, pug_build, rename ));
    gulp.watch('./src/sass/**/*.+(scss|sass)', gulp.series(style,style_build));
    gulp.watch("./src/icons/**/*", gulp.series(copyIco));
    gulp.watch('./src/fonts' , gulp.series(copyFonts));
    gulp.watch('./src/mailer/**/*' , gulp.series(copyMailer));
    gulp.watch('./src/img/**/*' , gulp.series(imageMin));
    gulp.watch('./src/js/**/*.js' , gulp.series(js));


};