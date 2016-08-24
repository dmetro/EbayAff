var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var jsFiles = ['*.js','src/**/*.js'];
var nodemon = require('gulp-nodemon');


gulp.task('style',function () {
    gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish',{
            verbose:true
        }))
        .pipe(jscs());

});
gulp.task('inject',function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var options = {
        bowerJson : require('./bower.json'),
        directory:'./public/lib',
        ignorePath:'../../public'
    }
    var injectSrc = gulp.src(['./public/css/*.css',
                              './public/js/*.js'],
                                {read: false} );
    var injetcOptions  = {
        ignorePath:'/public'
    };
    return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc,injetcOptions))
    .pipe(gulp.dest('./src/views'))
});



gulp.task('serve',['style','inject'],function() {
    var options = {
        script:'app.js',
        delaytime:1,
        env:{
            'PORT':3000
        },
        wathc:jsFiles
    }
    return nodemon(options)
    .on('restart',function(ev) {
        console.log('Restarting...........');
        
    })
})
