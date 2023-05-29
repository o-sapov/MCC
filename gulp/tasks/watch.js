var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;;

const htmlSource = './docs/**/*.html';
const scssSource = './app/assets/styles/**/*.scss';
const scssDist = './docs/assets/styles';
const jsSource = './app/assets/scripts/**/*.js';


gulp.task('watch', function () {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "docs"
        }
    });

    watch(htmlSource).on("change", reload);  
    watch(scssSource, gulp.series('manageCSS'));
    watch(jsSource, gulp.series('scriptsRefresh'));
});

gulp.task('cssInject', function () {
    return gulp.src(scssDist).pipe(browserSync.stream());
});

  
gulp.task('manageCSS', gulp.series('sass', 'cssmin', 'cssInject'));
gulp.task('scriptsRefresh', gulp.series('scripts',  reload));


