const gulp = require('gulp');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('autoprefixer', () =>
    gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['>0%'],
            cascade: false
        }))
        .pipe(rename('prefixed-style.css'))
        .pipe(gulp.dest('css'))
);


gulp.task('watch', function() {
  gulp.watch('css/style.css',['autoprefixer']);
});


// Default gulp task
gulp.task('default', ['watch']);

gulp.task('serve', ['watch']);
