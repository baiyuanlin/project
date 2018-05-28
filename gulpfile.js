// var gulp =require('gulp'); 
//gulp.task('copy-index',function(){ 
//	//gulp.src()找到我们的index.html然后使用.pipe()通道 
//	//gulp.dest()发布拷贝 
//	return gulp.src('index.html').pipe(gulp.dest('dist'));
// });
 var gulp = require('gulp');
 gulp.task('hello',function(){ //第一个参数是任务名称，第二个参数是任务功能
 	console.log('hello world!');

 })
 
 
var gulp = require('gulp'); 
gulp.task('images',function(){ 
     return gulp.src('images/*.jpg').pipe(gulp.dest('dist/images'))
   });
   var sass = require('gulp-sass'); 
gulp.task('sass',function(){
	return gulp.src('sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css')).pipe(connect.reload());
   })

gulp.task("sass",function(){
	gulp.src("sass/*.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
})
var connect= require('gulp-connect'); 
gulp.task('sever',function(){ 
	connect.server({root:'dist'});
})  
gulp.task('sever',function(){
	 //connect.server(); 
	//sever()方法介绍 
	//配置文档根目录 
	connect.server({ 
		root:'dist',
		livereload:true 
	}); 
})
gulp.task('default',['sever','watch']); 