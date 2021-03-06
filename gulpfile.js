var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('stylus', function() {
  gulp.src('./*.stylus')
    .pipe($.plumber())
    .pipe($.autoprefixer('last 2 version'))
    .pipe(gulp.dext('./'))
    .pipe(browserSync.reload({stream: true, once: true}));
});

gulp.task('serve', function() {
  browserSync.init(null, {
    server: {baseDir: './'}
  });
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('default', ['serve', 'stylus'], function(){
  gulp.watch(',/*stylus', ['stylus']);
  gulp.watch('index.html', ['reload']);
});
