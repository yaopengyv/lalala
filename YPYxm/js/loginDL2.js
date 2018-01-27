define(function(){
	return {
		yzName : function(name,qname){
			if(name==qname){
				return true;
			}else{
				return false;
			}
		},
		yzPwd : function(pwd,qpwd){
			if(pwd==qpwd){
				return true;
			}else{
				return false;
			}
		}
	}
})