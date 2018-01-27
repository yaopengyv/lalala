define(function(){
	return{
		checkName : function(uname){
			var reg=/^\w{3,6}$/;
			var reg1=/^[\u4e00-\u9fa5]+$/;
			
			if(reg.test(uname)||reg1.test(uname)){
				return true;
			}else{
				return false;
			}
		},
		checkPwd : function(upwd){
			var reg=/^.{6,}$/;
			if(reg.test(upwd)){
				return true;
			}else{
				return false;
			}
		},
		checkQpwd : function(upwd,pwd){
			if(upwd==pwd){
				return true;
			}else{
				return false;
			}
		}
	}
})