/*eslint-env node*/
var gulp         = require("gulp");
var browserSync  = require("browser-sync").create();
var sass         = require("gulp-sass");
var uglify       = require("gulp-uglify");
var postcss      = require("gulp-postcss");
var sourcemaps   = require("gulp-sourcemaps");
var autoprefixer = require("autoprefixer");
var concat       = require("gulp-concat");
var cleanCss = require("gulp-clean-css");
var awspublish = require("gulp-awspublish");
var parallelize = require("concurrent-transform");
var merge = require("merge-stream");
var gzip = gulp.src(["dist/**/*", "!dist/favicon*", "!dist/images"]).pipe(awspublish.gzip());
var plain = gulp.src([ "dist/favicon*", "dist/images*/**/*" ]);
var imagemin = require("gulp-imagemin");

gulp.task("build", ["sass", "js", "copy", "imageMin"]);
gulp.task("deploy", function() {
  var publisher = awspublish.create({
    region: "us-east-1",
    params: {
      Bucket: "dev.millergeek.xyz"
    }
  }, {
    cacheFileName: "your-cache-location"
  });

  // define custom headers
  var headers = {
    "Cache-Control": "max-age=17280000, no-transform, public"
  };

  return merge(gzip, plain)
    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(parallelize(publisher.publish(headers), 10))

    // Keep our bucket in-sync with our local files
    .pipe(publisher.sync())

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

    // print upload updates to console
    .pipe(awspublish.reporter());
});

// Static Server + watching scss/html files
gulp.task("serve", ["sass", "js"], function() {

  browserSync.init({
    server: [ "./app", "./dist"]
  });

  gulp.watch("app/scss/*.scss", ["sass"]);
  gulp.watch("app/*.html").on("change", browserSync.reload);
  gulp.watch("app/js/*.js", ["js-watch"]);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
  return gulp.src("app/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(concat("style.css"))
    .pipe(cleanCss())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream({match: "**/*.css"}));
});

gulp.task("js", function() {
  return gulp.src("app/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(concat("index.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("copy", function() {
  return gulp.src(["app/index.html", "app/manifest.json"])
    .pipe(gulp.dest("dist"));
});

gulp.task("imageMin", function() {
  gulp.src(["app/images*/**/*", "app/favicon.*"])
    .pipe(imagemin())
    .pipe(gulp.dest("dist"));
});

gulp.task("default", ["test"]);
