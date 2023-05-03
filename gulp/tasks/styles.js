var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps'), rename = require('gulp-rename');


// compile scss to css and create maps
gulp.task('sass', function () {
    return gulp.src('./app/assets/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./docs/assets/styles'));
});


// compile scss to css, compress and rename to *.min
gulp.task('cssmin', function () {
    return gulp.src('./app/assets/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename(function (path) {
            return {
                dirname: path.dirname + "",
                basename: path.basename + ".min",
                extname: ".css"
            };
        }))
        .pipe(gulp.dest('./dist/css'));
});
