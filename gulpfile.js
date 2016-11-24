// grab our packages
var gulp   = require('gulp'),
    clean = require('gulp-clean'),
    concat =  require('gulp-concat'),
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


gulp.task('prodJs',function(){
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglyfly())
        .pipe(gulp.dest('js'))
        .pipe(concat('main.min.js', { newLine : '' } ))
        .pipe(gulp.dest('js'));
});

gulp.task('devJs',function(){
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest('js'))
        .pipe(concat('main.min.js', { newLine : '' } ))
        .pipe(gulp.dest('js'));
});

