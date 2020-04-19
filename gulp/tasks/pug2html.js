const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')



module.exports = function pug2html(cb) {
    return gulp.src('./src/pug/page/**/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({reporter: 'default'}))
        .pipe(pug({pretty: true}))
        .pipe(htmlValidator())
        .pipe(bemValidator())
        .pipe(gulp.dest('./src/pages'))

};