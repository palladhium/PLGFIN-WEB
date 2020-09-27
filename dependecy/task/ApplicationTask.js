// Contruir todos os arquivos da application
const gulp = require("gulp");
const gulpUglify = require("gulp-uglify");
const gulpUglifyCss = require("gulp-uglifycss");
const gulpConcat = require("gulp-concat");
const babel = require("gulp-babel"); // O Babel garantir que ao se utilizar versões mais novas do JS ele converte na versão corrente para evitar problemas de compatibilidade com os browsers
const htmlmin = require("gulp-htmlmin");

gulp.task("application", ["application.html", "application.css", "application.js", "application.assets"]);

gulp.task("application.html", () => {
    return gulp.src("application/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dependecy/build"));
});

gulp.task("application.css", () => {
    return gulp.src("dependecy/asset/style/*.css")
    .pipe(gulpUglifyCss( { "uglyComments": true } ))
    .pipe(gulpConcat("application.min.css"))
    .pipe(gulp.dest("dependecy/build/style"));
});

gulp.task("application.js", () => {
    return gulp.src("application/**/*.js")
    .pipe(babel({ presets: ["env"] }))
    .pipe(gulpUglify())
    .pipe(gulpConcat("application.min.js"))
    .pipe(gulp.dest("dependecy/build/script"));
});

gulp.task("application.assets", () => {
    return gulp.src("dependecy/asset/**/*.*")
    .pipe(gulp.dest("dependecy/build/asset"));
});