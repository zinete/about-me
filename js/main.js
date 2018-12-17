
$(function(){
	$(window).resize();
	$("#block-nav").css("z-index", 1);

	// 导航条固定顶部
	$("#block-nav").navFixed();

	//平滑滚动导航
	$('#fstPage-down a, nav a, #logo').bind('click',function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-52}, 600);
		event.preventDefault();
	});
	//头像
	VanillaTilt.init(document.querySelector("#myPhoto"), {
		max: 25,
		speed: 400
	});
	//技能树动画
	window.sr = ScrollReveal({ duration: 800 });
        var nodelist = document.querySelectorAll('.skills ul li')
        sr.reveal(nodelist, 100);
});

$(window).resize(function(){

	//首页满屏
	$("#block-firstPage").css("height", $(window).height());
	//首页文字效果
	$('.blockTitle').stop().fadeIn("normal").animate({
		"top" : ($(window).height() - $('.blockTitle').outerHeight())/3
	},500);

	$("#block-wantMore").css("height", $(window).height()-52 + "px");
	$('#block-wantMore>p').css("top", ($("#block-wantMore").outerHeight(true) - $('#block-wantMore>p').outerHeight())/2 + "px");
});
