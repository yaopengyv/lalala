function pub(){
	$("#head").load("public.html #header");
	$("#head1").load("public.html #logo");
	$("#head2").load("public1.html #nav",function(){
				$(".nav_con .fl p").mouseenter(function(){
				$(".hide-list").fadeIn(700);
			})
			$(".nav_con").mouseleave(function(){
				$(".hide-list").fadeOut(700);
			})
	});
	$("#foot").load("public.html #bottom");
}
function conT(jsonsrc){
	var str=location.href;
	//http://127.0.0.1:8020/WWW/YPYxm/page.html?cname=one&pid=shop1
	str=str.split("?")[1];
	//console.log(str);
	arr=str.split("&");
	//console.log(str);
	uname=arr[0].split("=")[1];
	pid=arr[1].split("=")[1];
	//console.log(uname)
	//console.log(name,id)
	$.ajax({
		type:"get",
		url:"json/"+jsonsrc,
		success : function(json){
			var pp="";
			var str="";
			//alert();
			//console.log(json[uname])
			for(var i=0;i<json[uname].list.length;i++){
 				var pro=json[uname].list[i];
 				//alert(pro)
 				//console.log(json[uname].list.length);
				if(pid==pro.id){
					pp=`<li><a href="index.html">首页</a></li>
						<li>&gt;</li>
						<li>${pro.name}</li>`;
						//alert(pro.sm)
					//alert(pp)
					str=`<div class="c1">
					
						<div class="l">
							<img src="images/${pro.little}" alt="" />
							<img src="images/${pro.little1}" alt="" />
						</div>
						
						<div class="small-img">
							<img src="images/${pro.sm}" id="smallImg" alt="" />
							<img src="images/${pro.sm1}" id="smallImg" alt="" />
							<div id="mask">&nbsp;</div>
						</div>
						<div class="big-img">
							<img src="images/${pro.sm}" id="bigImg" alt="" style="z-index:1"/>
							<img src="images/${pro.sm1}" id="bigImg" alt=""/>
						</div>
					</div>
					<div class="c2">
						<p>${pro.name}</p>
						<h2>商品货号： <span>${pro.id}</span></h2>
						<h3>直播价：<i>${pro.price}</i><span>${pro.yPrice}</span></h3>
						<div class="addbox">
							<span class="updateCount" data-number="1">-</span>
							<span class="shop-count">1</span>
							<span class="updateCount" data-number="-1">+</span>
						</div>
						<input type="button" value="立即购买"/>
						<input type="button" value="加入购物车" style="background:palevioletred;"/>
					</div>
					<div class="r">
						<div class="r-t">
							<p>手机扫码订购</p>
							<img src="images/xqer.jpg" alt="" />
							<h6>银联支付/支付宝/微信支付</h6>
						</div>
						<div class="r-b"><a href="javascript:;">查看往期电视商品</a></div>
					</div>`
					
					//alert(str)
				}
			}
			
			$(".u").html(pp);
			$(".bot_con").html(str);
			glass();
		}
	});
}
function glass(){
	 	$(".l img").mouseenter(function(){
 		var index = $(this).index();
 		//alert(index)
 		$(".small-img img").eq(index).show().siblings("img").hide();
 		$(".big-img img").eq(index).show().siblings("img").hide();
 		})
	$(".small-img").mouseenter(function(){
		//alert()
		$("#mask").css("display","block")
		$(".big-img").css("display","block");
	})
	$(".small-img").mouseleave(function(){
		$("#mask").css("display","none");
		$(".big-img").css("display","none");
	})
	
	$(".small-img").mousemove(function(e){
 		var e = e || event;
 		var x = e.pageX - $("#mask").outerWidth()/2 - $(".c1").offset().left-100;
 		var y = e.pageY - $("#mask").outerHeight()/2 -  $(".c1").offset().top;
 		var maxL =  $(".c1").outerWidth()-$("#mask").outerWidth()-96;
 		var maxT =  $(".c1").outerHeight()-$("#mask").outerHeight()-20;
 		x = Math.min( maxL , Math.max(0,x) ) ;
 		y = Math.min( maxT , Math.max(0,y) ) ;
 		$("#mask").css({
 			left : x,
 			top : y
 		})
 		$(".big-img img").css({
 			left: - x * 800/380+"px",
 			top :- y * 800/380+"px"
 		})
 	})
}
