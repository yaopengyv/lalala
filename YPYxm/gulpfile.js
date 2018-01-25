
//导入gulp插件
var gulp = require("gulp");
//引入其他插件
var rename = require("gulp-rename");//重命名
var uglify = require("gulp-uglify");//压缩js插件
var concat = require("gulp-concat");//文件合并
var cssmin = require("gulp-cssmin");//压缩css文件
var imagemin = require("gulp-imagemin");//压缩图片文件
var sass = require("gulp-sass");//将sass文件转成css文件

//布置任务   将js下的sport6.js 压缩     
//思路 ：找到源文件 --- 压缩 --- 压缩后的文件送到目标目录里
gulp.task("uglify",function(){
	return gulp.src( "js/sport6.js" )  
			   .pipe( uglify() )
			   .pipe( gulp.dest( "dest" ) );
})

// 布置任务  ：  将js下的sport6.js 压缩       并重命名为  sport.min.js
//思路 ：找到源文件 --- 压缩 ---重命名 --- 压缩后的文件送到目标目录里
gulp.task("rename",function(){
	return gulp.src( "js/sport6.js" )
			   .pipe( uglify() )
			   .pipe( rename("sport.min.js") )
			   .pipe( gulp.dest( "js" ) );
})


//布置任务   将css下的三个css文件合并   并重命名为  all.css

//将css下的all.css 压缩 并重命名 为 all.min.css

//将img下的图片压缩  并存入到dest目录下的img目录下

//将css中的sass文件转成css文件     并重命名为index2.css
gulp.task("sass",function(){
	return gulp.src( "css/index2.scss" )
			   .pipe( sass() )
			   .pipe( rename("index2.css") )
			   .pipe( gulp.dest("css") )
})













//布置任务
gulp.task("default",["copyAll"],function(){
	console.log("执行default任务");
})

gulp.task("say",function(){
	console.log("say任务执行");
})

gulp.task("dance",["say"],function(){
	console.log("dance任务执行");
})

//布置任务   ：  将index.html   复制到 html目录下
gulp.task("copyHtml",function(){
	return gulp.src("index.html")
			   .pipe( gulp.dest("html") );
})

//布置任务 ： 将css目录下的index.css 文件 复制到  dest 目录下
gulp.task("copyCss",function(){
	return gulp.src("css/index.css")
			   .pipe( gulp.dest( "dest" ) );
})

//布置任务  ： 将img下的所有png图片 和 html下的所有html文件  复制到  all目录下
gulp.task("copyAll",function(){
	return gulp.src(["img/*.png","html/*.html"])
			   .pipe( gulp.dest( "all" ) );
})


// 布置一个任务  监听index.html的内容的改变 ，如果该文件内容有变化，就自动更改html下的index.html内容
gulp.task("watch",function(){
	return gulp.watch( "index.html",["copyHtml"] );
})
