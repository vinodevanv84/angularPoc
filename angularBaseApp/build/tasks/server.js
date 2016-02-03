module.exports = function(gulp, config, task) {
    var connect = require('gulp-connect');
    gulp.task('server', function() {
        connect.server();
    });
};
