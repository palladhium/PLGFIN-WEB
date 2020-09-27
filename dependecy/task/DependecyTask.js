// Contruir todos os arquivos de dependencias da application
const gulp = require("gulp");
const gulpUglify = require("gulp-uglify");
const gulpUglifyCss = require("gulp-uglifycss");
const gulpConcat = require("gulp-concat");

gulp.task("dependecy", ["dependecy.js", "dependecy.css", "dependecy.fonts"]);

gulp.task("dependecy.js", () => {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
        'node_modules/admin-lte/bootstrap/js/bootstrap.min.js',
        'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
        'node_modules/admin-lte/dist/js/app.min.js'
    ]).pipe(gulpUglify())
        .pipe(gulpConcat("dependecy.min.js"))
        .pipe(gulp.dest("dependecy/build/script"));
});

gulp.task('dependecy.css', () => {
    return gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/admin-lte/bootstrap/css/bootstrap.min.css',
        'node_modules/admin-lte/dist/css/AdminLTE.min.css',
        'node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    ])
        .pipe(gulpUglifyCss({ "uglyComments": true }))
        .pipe(gulpConcat('dependecy.min.css'))
        .pipe(gulp.dest('dependecy/build/style'))
});

gulp.task("dependecy.fonts", () => {
    return gulp.src([
        'node_modules/font-awesome/fonts/*.*',
        'node_modules/admin-lte/bootstrap/fonts/*.*'
    ]).pipe(gulp.dest("dependecy/build/fonts"));
});