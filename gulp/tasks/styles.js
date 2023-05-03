gulp.task('styles', function () {
    fileSync(localCss, serverCss
    );
});

// // compile scss to css and create maps
// gulp.task('sass', function () {
//     return gulp.src('./app/assets/styles/main.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./dist/css'));
// });