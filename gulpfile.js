var gulp = require('gulp');
var ts = require('gulp-typescript');
var rename = require("gulp-rename");
gulp.task('content-script', function () {
    return gulp.src('./src/content-script/content-script.ts')
        .pipe(ts({
            noImplicitAny: false,
            lib:['es2015','dom']
            // outFile: 'content-script.js'
        }))
        // .pipe(rename('content-script.js'))
        .pipe(gulp.dest('./dist/slackjaw'));
});
