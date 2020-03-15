const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const del    = require('del');
// const scp  = require('gulp-scp2');

// Настраиваем Обновление страницы в барузере

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Настраиваем SASS

gulp.task('styles', function() {
    return gulp.src("src/sass/*.+(scss|sass)")
    // Создаем несжатый файл style.css
        .pipe(sass({outputStyle: "nested"}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("src/css"))
    // Создаем сжатый файл в dist и добавляем префикс min
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});


// Настраиваем Pug
// Собираем главную страницу

gulp.task('pug-index', function buildHTML() {
    return gulp.src("src/*.pug")
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest("src/"))
    .pipe(browserSync.stream());
});
// Cобираем страницы

gulp.task('pug-page', function buildHTML() {
    return gulp.src("src/pug/page/*.pug")
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest("src/html"))
    .pipe(browserSync.stream());
});


//Мониторинг изменения файлов и запускаем задачу

gulp.task('watch', function() {
    gulp.watch("src/sass/*.+(scss|sass)", gulp.parallel('styles'))
    gulp.watch("src/*.pug", gulp.parallel('pug-index'));
    gulp.watch("src/pug/page/*.pug", gulp.parallel('pug-page'));
    gulp.watch("src/*.html", gulp.parallel('html-index'));
    gulp.watch("src/html/*.html", gulp.parallel('html-page'));
    gulp.watch("src/icons/*", gulp.parallel('icons'));
    gulp.watch("src/img/*", gulp.parallel('image'));
})


gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

// Минимизируем файлы HTML и складываем в dist

gulp.task('html-index',function() {
    return gulp.src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('html-page',function() {
    return gulp.src('src/html/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/html'));
});

// Копируем данные в dist



gulp.task('scripts',function() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts',function()  {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('icons',function() {
    return gulp.src('src/icons/**/*')
        .pipe(gulp.dest('dist/icons'));
});

gulp.task('mailer',function() {
    return gulp.src('src/mailer/**/*')
        .pipe(gulp.dest('dist/mailer'));
});

// Сжимаем картинки

gulp.task('image',function() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});




//Запускаем задачу на отслеживание

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'pug-index', 'pug-page', 'clean', 'html-index', 'html-page', 'scripts', 'fonts', 'icons', 'mailer', 'image'  ));


