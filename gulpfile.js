// Sass is not readable in modern browsers, 
// so Gulp allows CSS to be written in a tree-type function 
// within CSS. Makes everything much more readable and efficient, as well as compile it/minify it

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


// SCSS/CSS - Input and output folders for CSS

var SCSS_SRC = './public/scss/**/*.scss'; //input
var SCSS_DEST = './public/css'; //output

//Compile SCSS
gulp.task('compile_scss', function() {

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError)) // compiling into standard CSS
    .pipe(minifyCSS()) // Minify it
    .pipe(rename({suffix: '.min'})) // changing file name to minify
    .pipe(changed(SCSS_DEST)) // only applies to changed files
    .pipe(gulp.dest(SCSS_DEST)); // sending to output destyination
    

});

//detect changes in SCSS
gulp.task('watch_scss', function() { // watches input folder and when it detects a change, it runs the below function
    gulp.watch(SCSS_SRC, ['compile_scss']); //pass through as many tasks as you want on a loop
});

// Run tasks
gulp.task('default', ['watch_scss']); // when you type 'run gulp' it defaults to gulp