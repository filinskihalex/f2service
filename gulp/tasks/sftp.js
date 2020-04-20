const gulp = require('gulp');
// const sftp = require('gulp-sftp');
const sftp = require('gulp-sftp-up4');

module.exports = function ftp(cb) {
    return gulp.src('build/**/*')
        .pipe(sftp({
            host: 'f2service.ru',
            user: 'root',
            key: {
                location:'T:\key\root_timewe.ppk',
                passphrase:'secretphrase'},
            remotePath: '/root/docker/src/f2service_ru'
        }));
};

// const gulp = require('gulp');
// const sftp = require('gulp-sftp-up4');

// gulp.task('default', function () {
// 	return gulp.src('src/*')
// 		.pipe(sftp({
// 			host: 'f2service.ru',
//             user: 'root',
//             pass: 'xcWBvV9H',
//             remotePath: '/root/docker/src/f2service_ru'
// 		}));
// });