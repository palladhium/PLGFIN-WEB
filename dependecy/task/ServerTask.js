// Responsável por inicializar o servidor
const gulp = require("gulp");
const gulpWatch = require("gulp-watch");
const gulpWebServer = require("gulp-webserver");

// Monitora os arquivos no disco para atualizar os arquivos no Server
gulp.task("watch", () => {
    gulpWatch("application/**/*.html", () => {
        gulp.start("application.html");
    });
    gulpWatch("application/**/*.css", () => {
        gulp.start("application.css");
    });
    gulpWatch("application/**/*.js", () => {
        gulp.start("application.js");
    });
    gulpWatch("dependecy/asset/**/*.*", () => {
        gulp.start("dependecy/build/asset");
    });
});

gulp.task("server", ["watch"], () => {
    return gulp.src("dependecy/build")
    .pipe(gulpWebServer({
        livereload: true,
        port: 4000,
        open: true
    }));
});
