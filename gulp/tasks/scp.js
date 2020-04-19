const gulp = require('gulp');
const scp = require('gulp-scp3');


// module.exports = function scp(cb) {
//     return gulp.src('./build/*')
//         .pipe(scp({
//             host: '176.53.162.84',
//             username: 'root',
//             password: 't7uUieQ1',
//             dest: '/root/docker/src/f2service_ru'
//         }))
//         .on('error', function(err) {
//             console.log(err);
//     });
        
// };

gulp.task('default', function() {
    return gulp.src('./build/**/*')
    .pipe(scp({
        host: '176.53.162.84',
        username: 'root',
        password: 't7uUieQ1',
        dest: '/root/docker/src/f2service_ru'
    }))
    // .on('error', function(err) {
    //   console.log(err);
    // });
  });