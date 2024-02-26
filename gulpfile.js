
const {src, dest, watch, series} = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const imgmin = require('gulp-imagemin');




function lessComp(){
    return src('./src/main.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(dest('./build'))
}

function imgMin(){
    return src('./src/img/**/*')
        .pipe(imgmin())
        .pipe(dest('./build/img'))
}



exports.default = series(imgMin);

exports.watch = ()=>{
    watch('./src/**/*.less', lessComp)
}
