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
					str=`<div class="l">
						<img src="images/${pro.little}" alt="" />
					</div>
					<div class="c1">
						<div class="small-img">
							<img src="images/${pro.sm}" id="smallImg" alt="" />
							<div id="mask">&nbsp;</div>
						</div>
						<div class="big-img">
							<img src="images/${pro.sm}" id="bigImg" alt="" />
						</div>
					</div>
					<div class="c2">
						<p>${pro.name}</p>
						<h2>商品货号： <span>${pro.id}</span></h2>
						<h3>直播价：<i>${pro.price}</i></h3>
						<input type="button" value="立即购买"/>
					</div>
					<div class="r">
						<div class="r-t">
							<p>手机扫码订购</p>
							<img src="images/xqer.jpg" alt="" />
							<h6>银联支付/支付宝/微信支付</h6>
						</div>
						<div class="r-b"><a href="#">查看往期电视商品</a></div>
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
	var smallbox=document.getElementsByClassName("small-img")[0];
	var bigbox=document.getElementsByClassName("big-img")[0];
	var glassbox=document.getElementsByClassName("c1")[0];
	smallbox.onmouseover = function(){
		//alert()
		$id("mask").style.display = "block";
		bigbox.style.display = "block";
	}
	smallbox.onmouseout = function(){
		$id("mask").style.display = "none";
		bigbox.style.display = "none";
	}
	smallbox.onmousemove = function(e){
		var e = e || event;
		var x = e.pageX - $id("mask").offsetWidth/2 - glassbox.offsetLeft;
		var y = e.pageY - $id("mask").offsetHeight/2 - glassbox.offsetTop;
		var maxL = glassbox.offsetWidth - $id("mask").offsetWidth-2;
		var maxT = glassbox.offsetHeight - $id("mask").offsetHeight-2;
		x = x < 0 ? 0 : ( x > maxL ? maxL : x );
		y = y < 0 ? 0 : ( y > maxT ? maxT : y );
		var bigImgLeft = x*($id("bigImg").offsetWidth-bigbox.offsetWidth)/($id("smallImg").offsetWidth-$id("mask").offsetWidth);
		var bigImgTop = y*($id("bigImg").offsetHeight-bigbox.offsetHeight)/($id("smallImg").offsetHeight-$id("mask").offsetHeight);
		
		$id("mask").style.left = x + "px";
		$id("mask").style.top = y + "px";
		$id("bigImg").style.left = -bigImgLeft + "px";		
		$id("bigImg").style.top = -bigImgTop + "px";		
	}
}

	/*str=`<div class="l">
						<img src="images/xqsys.jpg" alt="" />
					</div>
					<div class="c1">
						<img src="images/${pro.src}" alt="" />
					</div>
					<div class="c2">
						<p>${pro.name}</p>
						<h2>商品货号： <span>${pro.id}</span></h2>
						<h3>直播价：<i>${pro.price}</i></h3>
						<input type="button" value="立即购买"/>
					</div>
					<div class="r">
						<div class="r-t">
							<p>手机扫码订购</p>
							<img src="images/xqer.jpg" alt="" />
							<h6>银联支付/支付宝/微信支付</h6>
						</div>
						<div class="r-b"><a href="#">查看往期电视商品</a></div>
					</div>`*/				