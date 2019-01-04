var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require('url');
var path = require('path');
var fs = require('fs');
var data = require('./data.json');

gulp.task('server', function() {
    return gulp.src('./src/')
        .pipe(webserver({
            port: 8028,
            livereload: true,
            middleware: function(req, res) {
                var pathname = url.parse(req.url).pathname;
                if (pathname == '/favicon.ico') {
                    return res.end('');
                }
                if (pathname == '/') {
                    res.end(fs.readFileSync(path.join(__dirname, 'src/index.html')));
                } else if (pathname == '/list') {
                    res.end(JSON.stringify({ code: 0, data: data }));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }));
});