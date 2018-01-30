function pub(){
	$("#head").load("public.html #header");
	$("#head1").load("public.html #logo");
	$("#head2").load("public.html #nav");
	
	//加载底部信息
	$("#foot").load("public.html #bottom");
}
//function checkYzm(sttr,inputval){
//			var arr=[];
//			var num=null;
//			for(i=0;i<4;i++){
//				if(rand(1,3)==1){
//					num=String.fromCharCode(rand(48,57));
//					arr.push(num);
//				}else if(rand(1,3)==2){
//					num=String.fromCharCode(rand(65,90));
//					arr.push(num);
//				}else{
//					num=String.fromCharCode(rand(97,122));
//					arr.push(num);
//				}
//			}
//			var str=arr.join("");
//			$(".yzm").html(str).css({"background":getColor(),"color":"#fff"});
//			//console.log(str)
//			/*if(sttr==inputval){
//				return true;
//			}else{
//				return false;
//			}*/
//		}
var flagYzm=null;
function checkYzm(){
//		二维码动态创建
			var arr=[];
			var num=null;
		for(i=0;i<4;i++){
			if(rand(1,3)==1){
				num=String.fromCharCode(rand(48,57));
				arr.push(num);
			}else if(rand(1,3)==2){
				num=String.fromCharCode(rand(65,90));
				arr.push(num);
			}else{
				num=String.fromCharCode(rand(97,122));
				arr.push(num);
			}
		}
			var str=arr.join("");
			$(".yzm").html(str).css({"background":getColor(),"color":"#fff"})
		//二维码验证
		$("#yzm").blur(function(){
			if($("#yzm").val()==str){
				flagYzm=true;
				$("#s4").css("display","block");
				$("#s44").html("")
				
			}else{
				flagYzm=false;
				$("#s44").html("验证码不正确！(区分大小写)");
				$("#s4").css("display","none");
			}
		})
		
		return flagYzm;
	}


function yzmRe(){
	$(".yzm").click(function(){
		checkYzm();
	})
}
