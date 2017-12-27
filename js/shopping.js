// 购物车
$(function(){
	$(".shopcard").mouseenter(function(){
		console.log($(this))
		$(this).css("cursor","pointer").find("a").css("color","#f51200").children("span").css("background-image","url(../images/icon-shopcart-active-header_9a286c8.png)").parent().siblings().show();
		$(this).find("a").next().children().slideDown(200);
	}).mouseleave(function(){
		$(this).find("a").css("color","").children("span").css("background-image","url(../images/icon-shopcart-header_32aa0dd.png)").parent().siblings().hide();
		$(this).find("a").next().children().slideUp(200);
	})
})
// 轮播图
$(function(){
	var i=0;
	function run(){
		if(i>4)i=0;
		dong(i);
		i++;
	}
	run();
	var timer=setInterval(run,5000);
	function dong(i){
		$(".img-list li").eq(i).fadeIn(1).addClass("current").animate({
			opacity:"1"
		},1000).siblings().removeClass("current").animate({
			opacity:"0"
		},1);
		$(".thumb-list span").eq(i).next().addClass("shop-change").animate({
			width:"100%"
		},5000).parent().siblings().find(".progress").removeClass("shop-change").animate({
			width:"0"
		},1)
		/*$(".banner").mouseenter(function(){
			$(".thumb-list span").eq(i).next().stop(true)
			clearInterval(timer);
		}).mouseleave(function(){
			$(".thumb-list span").eq(i).next().stop(true)
			timer=setInterval(run,5000);
		})*/
	}

});
// 图片抬起
if(window.innerWidth>567){
	$(function(){
		$(".floor-list .box-list .box .shadow").mouseenter(function(){
			$(this).find(".prodinfo").animate({
				"opacity":"0",
			},400).css("display","none").prev().show().animate({
				opacity:"1"
			},400);
			$(this).find("li").click(function(){
				$(this).addClass("selected").siblings().removeClass("selected");
				//chunk3下的X9s 全网通
				var arrImg1=["4366_1499928404613hd","4364_1503642104641hd","4365_1499928393486hd","4390_1503559387692hd"]
				var arrText1=["磨砂黑","玫瑰金","金色","活力蓝"];
				$(this).parent().parent().prev().find("img.x9s").attr("src","./images/"+arrImg1[$(this).index()]+"_530x530.png");
				$(this).parent().next().find(".prompt1").html("已选:X9s全网通 "+arrText1[$(this).index()]);
				//chunk3下的x9splus 全网通
				var arrImg2=["4358_1499309360512hd","4362_1499309373553hd","4363_1499309504737hd"]
				var arrText2=["玫瑰金","金色","磨砂黑"];
				$(this).parent().parent().prev().find("img.x9splus").attr("src","./images/"+arrImg2[$(this).index()]+"_530x530.png");
				$(this).parent().next().find(".prompt2").html("已选:X9s Plus全网通 "+arrText2[$(this).index()]);
				//chunk3下的xplay6 全网通
				var arrImg3=["4322_1500025960819hd","4321_1496689847161hd","4323_1496689864047hd"]
				var arrText3=["玫...","香...","磨..."];
				$(this).parent().parent().prev().find("img.xplus6").attr("src","./images/"+arrImg3[$(this).index()]+"_530x530.png");
				$(this).parent().next().find(".prompt3").html("已选:Xplay6 全网通64G版 "+arrText3[$(this).index()]);
				//chunk3下的x9 全网通
				var arrImg4=["4349_1497943198507hd","4151_1496689455875hd","4306_1496689476421hd"]
				var arrText4=["X9i磨砂黑","金色","活力蓝"];
				$(this).parent().parent().prev().find("img.x9").attr("src","./images/"+arrImg4[$(this).index()]+"_530x530.png");
				$(this).parent().next().find(".prompt4").html("已选:X9全网通 64G版 "+arrText4[$(this).index()]);
				//chunk3下的y67 全网通
				var arrImg5=["4116_1492998436609hd","4115_1492998433680hd","4285_1492998460891hd","4350_1498034509043hd"]
				var arrText5=["玫瑰金","香槟金","磨砂黑","炫动橙"];
				$(this).parent().parent().prev().find("img.y67").attr("src","./images/"+arrImg5[$(this).index()]+"_530x530.png");
				$(this).parent().next().find(".prompt5").html("已选:Y67 全网通 "+arrText5[$(this).index()]);
				//chunk3下的y55 全网通
				var arrImg6=["4111_1492998667334hd","4112_1492998675597hd","4287_1492998690073hd"]
				var arrText6=["金色","玫瑰金","磨砂黑"];
				$(this).parent().parent().prev().find("img.y55").attr("src","./images/"+arrImg6[$(this).index()]+"_530x530.png");
				$(this).parent().next().find(".prompt6").html("已选:Y55全网通 "+arrText6[$(this).index()]);
			});
		}).mouseleave(function(){
			$(this).find(".color-wrapper").animate({
				"opacity":"0",
			},400).css("display","none").next().show().animate({
				opacity:"1",
			},400)
		})
	});
}
// 右侧菜单
if(window.innerWidth>567){
	$(function(){
		$(".slide-bar li").mouseenter(function(){
			$(this).children().show().parent().siblings().children().hide();
		}).mouseleave(function(){
			$(this).children().hide()
		})
	});
}
//回到顶部
$(function(){
	$(".slide-backtop").hide();
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top<500){
			$(".slide-backtop").hide();
		}if(top>=500) $(".slide-backtop").show();
	});
	$(".slide-backtop").click(function(){
		var timer=setInterval(function(){
			window.scrollBy(0,-100);
			if($(window).scrollTop()==0){
				clearInterval(timer);
			}
		},50)
		
	})
});