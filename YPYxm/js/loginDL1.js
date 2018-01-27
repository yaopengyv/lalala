requirejs.config({
	
	paths : {
		jquery : "jquery-1.11.1.min",
		Ldl : "loginDL2",
		cookie : "public"
	}
})

requirejs(["jquery","Ldl","cookie"],function($,ld,ck){
	var cookie=getCookie("ulist");
	//alert(cookie)
	//console.log(cookie);
	var arr=[];
	arr.push(JSON.parse(cookie))
	for(var i=0;i<arr.length;i++){
	var name=arr[0][i].uname;
	var pwd=arr[0][i].upwd;
	//console.log(arr[0][i])
	}
	
	$("form").submit(function(){
		if(flagName&&flagPwd){
			alert("登陆成功！")
			return true;
		}else {
			alert("您输入的用户名或密码有误！");
			return false;
		}
		
	})
	var flagName=null;
		$("#name").blur(function(){
			
			if(ld.yzName(name,$("#name").val())){
				flagName=true;
			}else{
				flagName=false;
			}
		})
		
	var flagPwd=null;
		$("#pwd").blur(function(){
			
			if(ld.yzName(pwd,$("#pwd").val())){
				flagPwd=true;
			}else{
				flagPwd=false;
			}
		})
	
	/*for(var i=0;i<cookie.length;i++){
		
	}*/
})