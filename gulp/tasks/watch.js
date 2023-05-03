var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

const scss = './app/assets/styles';


  gulp.task('watch', function() {

    browserSync.init({
      notify: false,
      server: {
        baseDir: "docs"
      }
    });

    watch('./docs/index.html', function() {
        browserSync.reload();
      });

      watch('./docs/html/**/*.html', function() {
        browserSync.reload();
      });

        watch(scss, gulp.series('manageCSS'));
    });

    gulp.task('cssInject', function() {
        return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
      });
      
      gulp.task('manageCSS', gulp.series('styles', 'cssInject'));



// const sass = require('gulp-sass')(require('sass'));
// const sourcemaps = require('gulp-sourcemaps'), rename = require('gulp-rename');

// const localDist = './dist';
// const serverDist = 'Z:\\webdir\\movi-01';

// const localJS = localDist.concat('/assets/js');
// const serverJS = serverDist.concat('\\assets\\js');


// gulp.task('watch', function () {
//     watch(localJS, { ignoreInitial: true }, gulp.series('syncJS'));
//     // watch(scss, gulp.series('sass', 'cssmin'));
//     // watch(localCss, { ignoreInitial: true }, gulp.series('syncCss'));
// });


// gulp.task('syncJS', function () {
//     fileSync(localJS, serverJS
//     );
// });



// // compile scss to css, compress and rename to *.min
// gulp.task('cssmin', function () {
//     return gulp.src('./app/assets/styles/main.scss')
//         .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
//         .pipe(rename(function (path) {
//             return {
//                 dirname: path.dirname + "",
//                 basename: path.basename + ".min",
//                 extname: ".css"
//             };
//         }))
//         .pipe(gulp.dest('./dist/css'));
// });
