	var flag=true;
function LB(){
	var timer=setInterval(autoplay,3000);
	var index=0;
	function autoplay(){
		index++;
		if(index==$("#banner .banner ol li").size()){
			index=0;
		}
		$("#banner .banner ol li").eq(index)
								  .css("background","orange")
								  .siblings()
								  .css("background","#ccc")
								  
								  
		$("#banner .banner ul li").eq(index)
		                          .animate({"opacity":1},1000,function(){
								/*	flag=true;		*/
									flag=true;
									console.log(flag)
									
		                          })
		                          .siblings()
		                          .animate({"opacity":0},1000,function(){
//									flag=true;
		                          })
		                          
		                          
		                         }
	
		
	if(flag){	
	$("#banner .banner ol li").mouseenter(function(){
		//alert()
		flag=false;
		clearInterval(timer);
		index = $(this).index()-1;
		autoplay();
		//flag=true;		
		console.log(flag)
	})
	$("#banner .banner ol li").mouseleave(function(){
		
		timer= setInterval(autoplay,3000);
	})
	
	}
	
	$("#banner .banner ul li").mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(){
	timer=setInterval(autoplay,3000);
		
	})
	
}
function LB2(){
	var timer=setInterval(autoplay,2500);
	var index=0;
	var bt=$(".lbtn li");
	var im=$(".shopOne_con .bot_con .left ul")
	function autoplay(){
		index++;
		if(index==bt.size()){
			index=0;
		}
		
		//console.log(bt.size())
		//console.log(index);
		bt.eq(index)
		  .addClass("one")
		  .siblings()
		  .removeClass("one")
		  
		im.animate({"marginLeft":-398},800,function(){
			im.css("margin-left",0)
			  .find("li:first")
			  .appendTo(im);
		})
	}
	//console.log($(".lb li").length)
/*	$(".lbtn li").mouseenter(function(){
		
		clearInterval("timer");
		
		console.log(index)
		autoplay();
	}).mouseleave(function(){
		timer=setInterval(autoplay,4000);
		index=0
	})*/
	$(".lb li").mouseenter(function(){
		clearInterval(timer)
	}).mouseleave(function(){
		 timer=setInterval(autoplay,4000);
	})

}

function search(){
	$.ajax({
		type:"get",
		url:"json/search.json",
		success : function(json){
			
		}
	});
}

function xD(){
 $(window).scroll(function(){
	  	if($(document).scrollTop()>798){
	  		$(".th").css({
	  			"position" :"fixed",
	  			"top" : 0,
	  			"left" :80,
	  			"z-index":100
	  			
	  		})
	  	}else{
	  		$(".th").css({
	  			
	  			"position":"absolute",
	  			"top": 780,
	  			"left":80
	  			});
	  		
	  	}
	  })
}

function car_con(){
	var flag=true;
	
	$("#gwc_car .er p").mouseenter(function(){
		if(flag){
		flag=false;
		$(".hide").animate({"left":-66},1500,function(){
			flag=true;
		})
		
		}
	}).mouseleave(function(){
		
		$(".hide").animate({"left":66},1000)
		
	})
	
}
function myFS(){
	$(".a4").mouseenter(function(){
		$(".ddc").slideDown(500);
	})
	
	$(".a4").mouseleave(function(){
		$(".ddc").slideUp(500);
	})
}

function TwoCd(){
	
	$(".nav_con .fl p").mouseenter(function(){
		$(".hide-list").fadeIn(700);
	})
	$(".nav_con").mouseleave(function(){
		$(".hide-list").fadeOut(700);
	})
}

function jsonOne(){
	$.ajax({
		type:"get",
		url:"json/oneJson.json",
		success :function(json){
			var html="";
			var str="";
			for(var attr in json){
				//console.log(json)
				if(attr=="one"){
					
				for(var i=0;i<json[attr].list.length;i++){
					//alert(json.attr)
					var pro=json[attr].list[i];
					html+=`<div>
							<a href="javascript: ;"><img src="images/${pro.src}"/></a>
							<p><a href="page.html?cname=${attr}&pid=${pro.id}">${pro.name}</a></p>
							<span>${pro.price}</span>
						</div>`
				}
			$(".shopOne_con .right").html(html);
			}else if(attr=="two"){
				//alert(typeof(attr))
				//console.log(json[attr])
					for(var i=0;i<json[attr].list.length;i++){
						var pro=json[attr].list[i];
						str+=`<li>
								<a href="javascript: ;" class="pimg"><img src="images/${pro.src}"/></a>
								 <div class="bottom">
           							 <p class="pName"><a href="page.html?cname=${attr}&pid=${pro.id}" target="_blank" class="nn">${pro.name}</a></p>
           							 <i class="pPrice">${pro.price}</i>
                 				 </div>   
  
    							 <div class="intr">
        						 <h6>网站推荐：</h6>
								     <p>
								           ${pro.content}
								     </p>
  								  </div>
							</li>`
					}
					//console.log(str)
					$(".lb").html(str);
					LB2();
				}
		}
		}
	})
}
	
function jsonTwo(){
	$.ajax({
		type:"get",
		url:"json/twoJson.json",
		success : function(json){
			for(var attr in json){
				
				var str="";
				var html="";
					
				str=`<div class="img-box">
						<a href="javascript: ;"><img src="images/${json[attr].src}"/></a>	
					</div>`
				for(var i=0;i<json[attr].list.length;i++){
					var pro=json[attr].list[i];
					html+=`<div class="img-box sma1">
								<a href="javascript: ;"><img src="images/${pro.src}"/></a>	
								<p><a href="page.html?cname=${attr}&pid=${pro.id}">${pro.name}</a></p>
								<span>${pro.price}</span>
							</div>`
				}
			$(".bottom_box").html(str+html);
				
			}
		}
	});
}


function jsonTwo2(jsonsrc,btmb,rli,num){

		$.ajax({
		type:"get",
		url:"json/"+jsonsrc,
		success : function(json){
				var aa="";
				var str="";
				var html="";
			for(var attr in json){
				
				//console.log(attr)
				/*console.log(btmb)*/
				aa+=`<span data-cname='${attr}'>${json[attr].name}</span>`;
				if(attr==num){
				//alert()
				//console.log(attr)
				//alert(aa)
				str=`<div class="img-box2">
						<a href="javascript: ;"><img src="images/${json[attr].src}"/></a>	
					</div>`
				for(var i=0;i<json[attr].list.length;i++){
					var pro=json[attr].list[i];
					html+=`<div class="img-box2 sma2">
								<a href="javascript: ;"><img src="images/${pro.src}"/></a>	
								<p><a href="page.html?cname=${attr}&pid=${pro.id}">${pro.name}</a></p>
								<span>${pro.price}</span>
							</div>`
				}
				}
				
			}
			//console.log(str)
			$(btmb).html(str+html);
			
			$(rli).html(aa);
			$(rli+" span:lt(1)").addClass("sel");
			
			$(rli+" span").mouseenter(function(){
				$(this).addClass("sel")
				       .siblings()
				       .removeClass("sel");
				var cname=$(this).data("cname");
				
				
				//console.log(cname)
				var ss="";
				for(var i=0;i<json[cname].list.length;i++){
					//console.log(json[cname])
					var pr=json[cname].list[i];
					//console.log(pr)
					//alert(attr)
					str=`<div class="img-box2">
						<a href="javascript: ;"><img src="images/${json[cname].src}"/></a>	
					</div>`
					ss+=`<div class="img-box2 sma2">
								<a href="javascript: ;"><img src="images/${pr.src}"/></a>	
								<p><a href="page.html?cname=${cname}&pid=${pr.id}">${pr.name}</a></p>
								<span>${pr.price}</span>
							</div>`
				}
			$(btmb).html(str+ss);
			})
		}
	});
}
