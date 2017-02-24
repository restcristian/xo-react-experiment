let gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    fs = require('fs'),
    browserify = require('browserify');

let PATHS = {
    SRC:{
        sass:'dev/scss/**/*.scss',
        js:'dev/js/**/*.js'
    },
    DEST:{
        css:'build/css',
        js:'build/js'
    }
};

//Styles 
gulp.task('styles',()=>{
   return gulp.src(PATHS.SRC.sass)
        .pipe(sass())
        .pipe(gulp.dest(PATHS.DEST.css))
});
//JS
gulp.task('js',()=>{
    return gulp.src(PATHS.SRC.js)
           .pipe(concat('bundle.js'))
           .pipe(gulp.dest(PATHS.DEST.js))
});
//Translates JSX into ES5
gulp.task('babelify',()=>{
    browserify("build/js/bundle.js")
        .transform('babelify',{presets:['es2015','react']})
        .bundle()
        .pipe(fs.createWriteStream('bundle.js'));
});
//Watches
gulp.task('watch',()=>{
    gulp.watch(PATHS.SRC.sass,['styles']);
    gulp.watch(PATHS.SRC.js,['js','babelify']);
});

gulp.task('default',['styles','js','babelify','watch']);