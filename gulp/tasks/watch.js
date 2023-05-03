var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

const scss = './app/assets/styles';


gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });

    // watch('./docs/index.html', function () {
    //     browserSync.reload();
    // });

    watch('./docs/**/*.html', function () {
        browserSync.reload();
    });

    watch(scss, gulp.series('manageCSS'));
});

gulp.task('cssInject', function () {
    const stylesDest = './docs/assets/styles';
    return gulp.src(stylesDest).pipe(browserSync.stream());
});

gulp.task('manageCSS', gulp.series('sass', 'cssmin', 'cssInject'));


