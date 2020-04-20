const gulp = require('gulp');
const rsync = require('gulp-rsync');
	
module.exports = function sync(cb) {
    return gulp.src('build/**')
		  .pipe(rsync({
		    root: 'build/',
            hostname: 'f2service.ru',
            username: 'root',
		    destination: '/share',
		    // include: ['*.htaccess'], // Includes files to deploy
		    // exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		    recursive: true,
		    archive: true,
		    silent: false,
            compress: true,
            progress: true
	    }))
};