const gulp = require("gulp");
const util = require("gulp-util");

const sequenceTask = require("run-sequence"); // Executar o build em sequencia

require("./dependecy/task/ApplicationTask");
require("./dependecy/task/DependecyTask");
require("./dependecy/task/ServerTask");

gulp.task("default", () => {
    if(util.env.production) {
        sequenceTask("dependecy", "application");
    } else {
        sequenceTask("dependecy", "application", "server");
    }
});