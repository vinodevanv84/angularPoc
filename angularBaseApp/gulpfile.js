"use strict";
var config = require('./build/config.js'),
    path = require('path'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    glob = require('glob'),
    help = require('gulp-help')(gulp),
    task = {};

config.env = gutil.env;

glob.sync(config.builder.path('tasks', '*.js')).forEach(function(taskPath) {
    require(taskPath)(gulp, config, task);

});

gulp.task('default', ['help']);
