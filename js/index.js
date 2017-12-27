// 窗口改变页面自动刷新
$(function(){
	$(window).on('resize',function(){
		if($(window).width()>= 567){
			
			window.location.reload(); 
		}
		
	})
})
//导航特效
$(function(){
	//搜索框
	$(".nav-search").mouseenter(function(){
		$(this).css("opacity",".6");
		$(this).click(function(){			
			$(".nav-tool .nav-search").show().animate({
				left:"-58px",
			},500);
			$(".search-top .search-close").toggleClass("xuanzhuan")
			$(".nav-h-search").show();
			$(".search-content").fadeIn(500);
			
			$(".wrapper-nav li").fadeOut(500);
			$(".nav-h-search .search-top input").delay(500).fadeIn(500);
			$(".search-top a.search-close").fadeIn(500);
			$(".link").hide().slideDown(1000);
		});	
		$(".search-top a.search-close").click(function(){
			$(this).css("display","none");
			$(".nav-tool .nav-search").show().animate({
				left:"-15px",
			},500);
			$(".search-content").fadeOut(500);
			$(".wrapper-nav li").delay(500).fadeIn(1000);
			$(".nav-h-search .search-top input").fadeOut(500);
		})
	}).mouseleave(function(){
		$(this).css("opacity","1");
	});
})
//个人中心
$(function(){
	if(window.innerWidth>567){
		var timer;
		$(".nav-user").mouseenter(function(){
			$(this).css("opacity",".6");
			$(".user-center").show().children().slideDown(800);
		}).mouseleave(function(){
			$(this).css("opacity","1");
			timer=setTimeout(function(){
				$(".user-center").hide().children().css("display","none");
			},200);
		});
		$(".user-center").mouseenter(function(){
			clearTimeout(timer);
		}).mouseleave(function(){
			$(".user-center").hide().children().css("display","none");
		});
	}
});

// 下拉菜单
$(function(){
	if(window.innerWidth>567){
		var timer;
		$(".wrapper-nav li[class='choose']").mouseenter(function(){
			clearTimeout(timer);
			var left=$(this).offset().left;
			var index=$(this).index();
			var leftWrapper=$(".wrapper").offset().left;
			$(".head-menu").slideDown(200);
			$(".menu-bigBox ul").eq(index).css("left",left-leftWrapper+5);
			$(".nav-xian div").eq(index).css("left",left-leftWrapper+5);
			
			// 整体消失
			/*$("header").mouseleave(function(){
				$(".head-menu").slideUp(100);
				$(".nav-xian div").slideUp().animate({
					height:"0px"
				},1).finish();
				$(".nav-xian div").slideUp().animate({
					height:"0px"
				},1);
				$(".menu-bigBox ul").slideUp().animate({
					height:"0px"
				},1).finish();
				$(".menu-bigBox ul").slideUp().animate({
					height:"0px"
				},1);
			});*/
			// 控制线的移动
			$(".nav-xian div").eq(index).siblings().slideUp(100).finish();
			$(".nav-xian div").eq(index).slideDown(300).animate({
				height:"205px",
			},300,function(){
				$(this).siblings().slideUp(100);
			});
			// 控制下拉列表
			$(".menu-bigBox ul").eq($(this).index()).siblings().slideUp(100).finish();
			$(".menu-bigBox ul").eq($(this).index()).slideDown(500).animate({
				height:"178px",
			},500,function(){
				$(this).siblings().slideUp(100);
			});
			console.log(this)
		})
		$(".wrapper-nav li[class='choose']").mouseleave(function(){
			console.log($(".wrapper-nav li[class='choose']"))
			timer=setTimeout(function(){
				$(".head-menu").slideUp(100);
				$(".nav-xian div").slideUp().animate({
					height:"0px"
				},1).finish();
				$(".nav-xian div").slideUp().animate({
					height:"0px"
				},1);
				$(".menu-bigBox ul").slideUp().animate({
					height:"0px"
				},1).finish();
				$(".menu-bigBox ul").slideUp().animate({
					height:"0px"
				},1);
			},200);
		});
		$(".nav-xian div").mouseenter(function(){
			clearTimeout(timer);
		});
		$(".head-menu").mouseenter(function(){
			clearTimeout(timer);
		}).mouseleave(function(){
			$(".head-menu").slideUp(100);
				$(".nav-xian div").slideUp().animate({
					height:"0px"
				},1).finish();
				$(".nav-xian div").slideUp().animate({
					height:"0px"
				},1);
				$(".menu-bigBox ul").slideUp().animate({
					height:"0px"
				},1).finish();
				$(".menu-bigBox ul").slideUp().animate({
					height:"0px"
				},1);
		})
	}		
});

//轮播图
$(function(){
	$(".slideShow-switch a").mouseenter(function(){
		$(this).addClass("current");
	}).mouseleave(function(){
		$(this).removeClass("current");
	}).click(function(){
		$(".slideShow-img ul li").find(".title").eq($(this).index()).end().finish();
		$(".slideShow-img ul li").eq($(this).index()).css("display","block").siblings().css("display","none");
		$(this).off("mouseleave");
		if($(this).index()==2){
			$(this).children().css("background","#333").parent().siblings().children().css("background","rgba(128,128,128,.2)");
		}else
		$(this).children().css("background","#fff").parent().siblings().children().css("background","");
		$(".img-wrapper div").eq($(this).index()).fadeIn(500).siblings().fadeOut(500);
		$(".slideShow-switch a").eq($(this).index()).addClass("current").siblings().removeClass("current");
		$(".slideShow-img ul li").find(".title").eq($(this).index()).slideDown(1000).parent().parent().parent().siblings().find(".title").hide();
		if($(this).index()==2){
			$(".y66 .figure .f3").css("left","-100px").prev().css("left","100px").next().show().animate({
				left:"0px",
			},500).prev().show().animate({
				left:"0px",
			},500).prev().fadeIn(500);
		}else{
			$(".y66 .figure .f3").hide().prev().hide().prev().hide();	
		}
		$(".slideShow-switch a").eq($(this).index()).siblings().children().children().hide();
		clearInterval(timer);
	});
	var i=0;
	run();
	function run(){		
		if(i>3) i=0;
		dong(i);
		i++;
	}
	var timer=setInterval(run,5000);
	function dong(i){
		$(".img-wrapper div").eq(i).fadeIn(500).siblings().fadeOut(500);
		$(".slideShow-switch a").eq(i).addClass("current").siblings().removeClass("current");
		$(".slideShow-img ul li").eq(i).css("display","block").siblings().css("display","none");
		$(".slideShow-img ul li").find(".title").eq(i).slideDown(1000).end().delay(4000).fadeOut();
		if(i==2){
			$(".slideShow-switch a").eq(i).children().parent().siblings().children().css("background","rgba(128,128,128,.2)");
			$(".slideShow-switch a").eq(i).children().children().animate({
				width:"40px",
			},5000).animate({
				width:"0px",
			},1);
			$(".y66 .figure .f3").css("left","-100px").prev().css("left","100px").next().show().animate({
				left:"0px",
			},500).prev().show().animate({
				left:"0px",
			},500).prev().fadeIn(500);
		}else{
			$(".slideShow-switch a").eq(i).siblings().children().css("background","");	
			$(".slideShow-switch a").eq(i).children().children().animate({
				width:"40px",
			},5000).animate({
				width:"0px",
			},1);
			$(".y66 .figure .f3").hide().prev().hide().prev().hide();
		}
	}
})
// 伸缩菜单
$(function(){
	$(".directory-list li").click(function(){
		if($(this).hasClass("exist")){
			$(this).animate({
				height:"32px"
			},100);
			$(this).removeClass("exist");
			$(this).find("b").removeClass("zhuan");
			return;
		}
		$(this).find("b").addClass("zhuan").parent().parent().addClass("exist").animate({
			height:"190px",
		},100,function(){
			$(this).animate({height:"190px"}).finish();
		}).siblings().find("b").removeClass("zhuan").parent().parent().removeClass("exist").animate({
			height:"32px"
		},100)
	})
})
// 关注vivo
$(function(){
	if(window.innerWidth>567){
		$(".start").mouseenter(function(){
			$(this).find("i").show();
			$(this).children("ul").slideDown(200).animate({
				display:"block",
				opacity:"1"
			},300).finish();
			$(this).children("ul").slideDown(200).animate({
				display:"block",
				opacity:"1"
			},300).children().fadeIn().animate({
				display:"block",
				opacity:"1",
				marginTop:"-20px",
				paddingTop:"20px"		
			},500).parent().mouseleave(function(){
				$(this).parent("ul").fadeOut().children(":first").css('margin-top',"30px");
			});

			$(this).children("ul").children(".zhifubao").mouseenter(function(){
				$(".twoCode").css("opacity","1").show().find(".weixin").hide().next().fadeIn().parent().next().hide().next().show();
			}).mouseleave(function(){
				$(".twoCode").hide();
			});
			$(this).children("ul").children(".zhifubao").prev().mouseenter(function(){
				$(".twoCode").css("opacity","1").show().find(".weixin").show().next().hide().parent().next().show().next().hide();
			}).mouseleave(function(){
				$(".twoCode").hide();
			})
			$(".start").mouseleave(function(){
				$(this).find("i").hide();
				$(this).children("ul").hide().animate({opacity:0}).children(":first").css('margin-top',"30px").finish();
				$(this).children("ul").hide().animate({opacity:0}).children(":first").css('margin-top',"30px");
			})
		})
	}
})	
//国际官网
$(function(){
	if(window.innerWidth>567){
		$(".end").mouseenter(function(){
			$(this).next("i").show();
			$(this).children("ul").slideDown(500).animate({
				"opacity":"1"
			},500).finish()
			$(this).children("ul").show().find("li").slideDown(200).animate({
				"opacity":"1"
			},200);
			$(this).children("ul").mouseleave(function(){
				$(this).hide().animate({
					"opacity":"0"
				});
			});
		}).mouseleave(function(){
			$(this).next("i").hide();
			$(this).children("ul").hide().animate({
				"opacity":"0"
			}).finish()
			$(this).children("ul").hide().animate({
				"opacity":"0"
			}).find("li").css("opacity","0").hide();
		})
	}
})
// 回到顶部
$(function(){
	$(".toTop").hide();
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top<800){
			$(".toTop").hide();
		}if(top>=800) $(".toTop").show();
	});
});
// 响应式
// 导航
$(function(){
	$(".vivo-menu").click(function(){
		$(this).find(".menu-span1").toggleClass("rotate1").next().toggle().next().toggleClass("rotate2");

		var height=$(window).height()-57;
		$(window).resize(function(){
			height=$(window).height()-57;
			$(".vivo-menu").next().next().next().animate({
				height:height,
			},0);
		})
		$(this).next().next().next().animate({
			height:height,
		},200).finish();
		$(this).next().next().next().slideToggle(200).animate({
			height:height,
		},200);
		$(".head-wrap .wrapper").css("background","#0d0d0d").children(".min-logo").children(".min-logo-start").hide().next().show();
		
		if($("html").hasClass("exist")){
			$("html").removeClass("exist").css("overflow-y","auto")
		}else {
			$("html").addClass("exist").css("overflow-y","hidden")
		}
		
		$(".toTop").hide();
	})
});