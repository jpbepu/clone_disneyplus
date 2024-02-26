
const gulp = require('gulp');
const less = require('gulp-less');
const watch= require('gulp-watch');
const sourcemaps = require('gulp-sourcemaps');





function lessComp(){
    return gulp.src('./src/main.less')
    .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build'))
}



exports.default = ()=>{
    gulp.watch('./src/**/*.less', lessComp)
}
