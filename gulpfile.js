 var gulp = require('gulp');
 gulp.task('hello',function(){ //第一个参数是任务名称，第二个参数是任务功能
 	console.log('hello world!');
 })
 
 
 
  var gulp =require('gulp'); 
gulp.task('copy-html',function(){ 
	//gulp.src()找到我们的index.html然后使用.pipe()通道 
	//gulp.dest()发布拷贝 
	return gulp.src('*.html').pipe(gulp.dest('dist'));
 });
 
gulp.task("js",function(){
	gulp.src(["js/*.js"]).pipe(gulp.dest("dist/js"));
}) 
 
 
 
 var gulp = require('gulp'); 

 gulp.task('img',function(){ 
	return gulp.src('img/*.{jpg,png}').pipe(gulp.dest('dist/img'))
 }) 
 
 gulp.task('build',['copy-index','img',],function(){
	 console.log('编译成功');
 }) 
   var sass = require('gulp-sass'); 
gulp.task('sass',function(){
	return gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css')).pipe(connect.reload());
   })