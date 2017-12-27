// 验证码
$(function(){
	$('.change-img').val('nbmd');
	$(".change-img").click(function(){
		var arr=["nbmd","mxnn","nwxy","ypnx","ofre","dxrh","pyaz","xhny","myhx","myny","uyna"];
		var i=Math.floor(Math.random()*11);
		$(this).attr("src","../images/check"+i+".jpg");
		$('.change-img').val(arr[i]);
	})
})
// 下一步验证
$(function(){
	$(".link-btn").click(function(){
		$(".checkCode").focus(function(){
			$(".check").show().html("");
		})
		if($('.change-img').val()==$('.checkCode').val() && $(".num").val().search(/^1\d{10}$/)==0){
			alert("注册成功");
		}

		if( $(".checkCode").val()==""||$(".checkCode").val()!=$('.change-img').val()){
			$(".check").show().html("请输入正确的验证码");
			$(".num").click(function(){
				$(".check").hide()

			});
			$(".checkCode").click(function(){
				$(".check").hide()
			});
		}
		if($(".num").val().search(/^1\d{10}$/)==-1 ){
			$(".check").show().html("请输入正确的手机号");
			$(".num").click(function(){
				$(".check").hide()
			});
			$(".checkCode").click(function(){
				$(".check").hide()
			});
		}
		
	});
});

// 阅读协议
$(function(){
	$(".checked").click(function(){
		$(this).toggleClass("no");
	})
})
// 尾部
$(function(){
	$(".online li:first").mouseenter(function(){
		$(this).find(".online-service").hide().next().show();
	}).mouseleave(function(){
		$(this).find(".online-service").show().next().hide();
	})
})