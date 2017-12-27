// 登录按钮
$(function(){
	$(".btn").click(function(){
		if($(".user").val()==""){
			$(".reminer").show().html("请输入账号");
			$(".user").click(function(){
				$(".reminer").hide()
			});
			$(".pwd").click(function(){
				$(".reminer").hide()
			});
		}
		if($(".user").val()!="" && $(".pwd").val()==""){
			$(".reminer").show().html("请输入密码");
			$(".user").click(function(){
				$(".reminer").hide()
			});
			$(".pwd").click(function(){
				$(".reminer").hide()
			});
		}
	});
});
// 两周内自动登录
$(function(){
	$(".check").click(function(){
		$(this).toggleClass("checked").toggleClass("no");
	});
});
// 其他方式登录
$(function(){
	$(".pic a").mouseenter(function(){
		$(this).find(".normal").hide().next().show();
	}).mouseleave(function(){
		$(this).find(".normal").show().next().hide();
	});
});
// 尾部
$(function(){
	$(".footer .online ul li:first-child a").mouseenter(function(){
		$(this).find(".online-service").hide().next().show();
	}).mouseleave(function(){
		$(this).find(".online-service").show().next().hide();
	})
});