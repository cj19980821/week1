var gulp = require('gulp');
var scss = require('gulp-sass');
var mincss = require('gulp-clean-css');
var regify = require('gulp-regify');
var concat = require('gulp-concat');
var webserver = require('gulp-server');

//创建scss任务，进行scss文件编译
gulp.task('scssmin', function() {
    return gulp.src('./scss/*.scss')
    pipe(scss())
    pipe(gulp.dest('./css'))
});

//压缩css
gulp.task('cssmin', function() {
    return gulp.src('./css/*.css')
    pipe(mincss())
    pipe(gulp.dest('./css'))
})

gulp.task('webserver', function() {
    gulp.src('server', function() {
        port: '8080'
    })

})
gulp.watch('mincss', function() {
    return gulp.src('./css/*.css');
})

//默认执行webserve任务
gulp.task('default', function() {

})

//创建build任务
gulp.task('build', function() {
    return gulp.src('./css/*.css')
    pipe(gulp.concat('build.js'))
    pipe(gulp.dest('./dist'))
})