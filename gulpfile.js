// grab our packages
var gulp   = require('gulp'),
    uglyfly = require('gulp-uglify'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    concat =  require('gulp-concat'),
    jshint = require('gulp-jshint'),
    run             = require('run-sequence'),
    livereload = require('gulp-livereload');


// define the default task and add the watch task to it
gulp.task('default');


gulp.task('prod',['removeMainJs','']);

gulp.task('dev', function () {
    run(['removeMainJs'], 'devJs');
});


gulp.task('removeMainJs', function () {
    return gulp.src('js/main.min.js')
        .pipe(clean({force: true}));
});


gulp.task('prodJs',function(){
    return gulp.src('js/*.js')
        .pipe(uglyfly())
        .pipe(gulp.dest('js'))
        .pipe(concat('main.min.js', { newLine : '' } ))
        .pipe(gulp.dest('js'));
});

gulp.task('devJs',function(){
    return gulp.src('js/*.js')
        .pipe(gulp.dest('js'))
        .pipe(concat('main.min.js', { newLine : '' } ))
        .pipe(gulp.dest('js'));
});

