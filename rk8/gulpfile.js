var gulp = require('gulp');
var server = require('gulp-webserver');
var listdata = require('./src/data/data');
var path = require('path');
var fs = require('fs');
var url = require('url');
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8088,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }

                if (pathname === '/api/list') {
                    res.end(JSON.stringify({ code: 1, data: listdata }))
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
                }
            }
        }))
})