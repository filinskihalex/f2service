const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const pugLinter = require('gulp-pug-linter')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')
const htmlmin = require('gulp-htmlmin');



module.exports = function pug2html_build(cb) {
    return gulp.src('./src/pug/page/**/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({reporter: 'default'}))
        .pipe(pug())
        .pipe(htmlValidator())
        .pipe(bemValidator())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./build/pages'))

};