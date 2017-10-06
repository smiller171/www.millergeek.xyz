var gulp         = require('gulp');
var gutil        = require('gulp-util');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var concat       = require('gulp-concat');
var cleanCss = require('gulp-clean-css');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'js'], function() {

    browserSync.init({
        server: [ "./app", "./dist"]
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js", ['js-watch']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/scss/*.scss")
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(postcss([ autoprefixer() ]))
  .pipe(concat('style.css'))
  .pipe(cleanCss())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest("dist/css"))
  .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('js', function() {
  return gulp.src('app/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(concat('index.js'))
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('copy', function() {
  return gulp.src("app/index.html")
  .pipe(gulp.dest("dist/index.html"));
});

gulp.task('default', ['test']);
