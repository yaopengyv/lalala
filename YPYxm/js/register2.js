requirejs.config({
	
	paths : {
		jquery : "jquery-1.11.1.min",
		ref3 : "register3",
		cookie : "public"
	}
})
var arr=[];
requirejs(["jquery","ref3","cookie"],function($,ref,ck){
	$(".sub").click(function(){
		if(flagName&&flagPwd&&flagQpwd){
			var json = {
				"uname" : $("#uname").val(),
				"upwd" : $("#upwd").val()
			}
			arr.push(json);
			//alert(arr)
			setCookie("ulist", JSON.stringify( arr ),10 );
			
			/*var a=confirm("注册成功！是否跳到登录界面？");
			//alert(a)
			if(a==true){
			location.href="loginDL.html";
			//return true;
			
			}else{
			location.href="";	
			}*/
			
			alert("注册成功！");
			return true;
		}else{
			return false;
		}
		
	})
	var flagName=null;
	$("#uname").blur(function(){
		if(ref.checkName($("#uname").val())){
			$("#s1").css("display","block");
			$("#s11").html("")
			flagName = true;
		}else{
			$("#s11").html("用户名长度在3~6之间!");
			$("#s1").css("display","none");
			flagName = false;
		}
	})
	
	var flagPwd=null;
	$("#upwd").blur(function(){
		if(ref.checkPwd($("#upwd").val())){
			$("#s2").css("display","block");
			$("#s22").html("")
			
			flagPwd = true;
		}else{
			$("#s22").html("密码长度必须大于6！");
			$("#s2").css("display","none");
			flagPwd = false;
		}
	})
	
	var flagQpwd=null;
	$("#qpwd").blur(function(){
		if(ref.checkQpwd($("#upwd").val(),$("#qpwd").val())){
			
			$("#s3").css("display","block");
			$("#s33").html("")
			
			flagQpwd = true;
		}else{
			$("#s33").html("输入的密码和原密码不一致！");
			$("#s3").css("display","none");
			flagQpwd = false;
		}
	})
})