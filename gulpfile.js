// grab our packages
var gulp   = require('gulp'),
    clean = require('gulp-clean'),
    concat =  require('gulp-concat'),
    sass = require('gulp-sass'),
    run             = require('run-sequence'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint');

// define the default task and add the watch task to it
gulp.task('default');


gulp.task('prod',['removeMainJs']);

gulp.task('dev', function () {
    run(['removeMainJs'], 'devJs');
});


gulp.task('removeMainJs', function () {
    return gulp.src('js/main.min.js')
        .pipe(clean({force: true}));
});



gulp.task('devCss', function(){
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});



gulp.task('prodJs',function(){
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglyfly())
        .pipe(gulp.dest('js'))
        .pipe(concat('main.min.js', { newLine : '' } ))
        .pipe(gulp.dest('js'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('devJs',function(){
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest('js'))
        .pipe(concat('main.min.js', { newLine : '' } ))
        .pipe(gulp.dest('js'));
});

