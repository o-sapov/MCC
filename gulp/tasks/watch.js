var gulp = require('gulp'),
    watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();
  


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
    });





// const sass = require('gulp-sass')(require('sass'));
// const sourcemaps = require('gulp-sourcemaps'), rename = require('gulp-rename');

// const localDist = './dist';
// const serverDist = 'Z:\\webdir\\movi-01';

// const localJS = localDist.concat('/assets/js');
// const serverJS = serverDist.concat('\\assets\\js');

// const scss = './app/assets/styles';
// const localCss = localDist.concat('/css');
// const serverCss = serverDist.concat('\\css');


// gulp.task('sync', function (done) {
//     fileSync(localDist, 'W:\\test\\dist',{ignore: ['.git', '.gitattributes', '.gitignore', '.Rhistory']});
//     done();
// });

// gulp.task('watch', function () {
//     watch(localJS, { ignoreInitial: true }, gulp.series('syncJS'));
//     // watch(scss, gulp.series('sass', 'cssmin'));
//     // watch(localCss, { ignoreInitial: true }, gulp.series('syncCss'));
// });


// gulp.task('syncJS', function () {
//     fileSync(localJS, serverJS
//     );
// });

// gulp.task('syncCss', function () {
//     fileSync(localCss, serverCss
//     );
// });

// // compile scss to css and create maps
// gulp.task('sass', function () {
//     return gulp.src('./app/assets/styles/main.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./dist/css'));
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
