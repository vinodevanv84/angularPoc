module.exports = function(gulp, config, task) {
    gulp.task('stage', function() {
    	console.log(config.srcDir.path('**'));
        gulp.src([config.srcDir.path()])
          .pipe(gulp.dest(config.stagingDir.path()));
    });
};

