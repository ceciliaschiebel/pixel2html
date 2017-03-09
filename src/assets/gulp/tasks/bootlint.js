var gulp = require('gulp');
var bootlint  = require('gulp-bootlint');

gulp.task('bootlint', function() {
    return gulp.src('./index.html')
        .pipe(bootlint());
});