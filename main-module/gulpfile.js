var gulp = require('gulp');
var gulpPlugins = require('gulp-load-plugins')();
var gulpSync = require('gulp-sync')(gulp);

var paths = {
    build: {
        output: 'build'
    },
    sources: './*.js',
    scripts: [
        './*.js'
    ],
    html: [
        './*.html'
    ]
};

gulp.task('compile-source', function () {
    return gulp
        .src(paths.sources)
        .pipe(gulp.dest(paths.build.output));
});

gulp.task('copystatic', function () {
    return gulp
        .src(paths.html)
        .pipe(gulp.dest(paths.build.output));
});

gulp.task('build', [
    'copystatic',
    'compile-source'
]);

gulp.task('watch', function () {
    gulp.watch(paths.scripts, gulpSync.sync(['compile-source']));
    gulp.watch(paths.html, gulpSync.sync(['copystatic']));
    gulp.watch(paths.static, gulpSync.sync(['copystatic']));
});

gulp.task('serve', ['build'], function () {
    gulpPlugins.connect
        .server({
            port: 8088,
            root: ['build', __dirname]
        });
});

gulp.task('default', ['serve', 'watch']);