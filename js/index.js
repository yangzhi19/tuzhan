var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical', // 垂直切换选项
	loop: false, // 循环模式选项

	// 如果需要分页器
	pagination: {
		el: '.swiper-pagination',
	},
	on: {
	slideChangeTransitionEnd: function() {
				console.log(this.activeIndex)
		if (this.activeIndex === 0) {
			$(".swiper-wrapper .swiper-slide").eq(this.activeIndex).children(".img").addClass("active").siblings(".text1").addClass("active").siblings(".text2").addClass("active").siblings(".text3").addClass("active").siblings(".yuanxiao").addClass("active").siblings(".nyx").children("img").addClass("active").parent().siblings(".yuanxiao").children("img").addClass("active1");
			$(".swiper-wrapper").siblings(".dl-left").addClass("active").siblings(".dl-right").addClass("active");
		} else {
			$(".swiper-wrapper .swiper-slide").children(".img").removeClass("active").siblings(".text1").removeClass("active").siblings(".text2").removeClass("active").siblings(".text3").removeClass("active").siblings(".yuanxiao").removeClass("active").siblings(".nyx").children("img").removeClass("active").parent().siblings(".yuanxiao").children("img").removeClass("active1");
			$(".swiper-wrapper").siblings(".dl-left").removeClass("active").siblings(".dl-right").removeClass("active");
		}
	},
}

})
function add(){
	$(".swiper-wrapper .swiper-slide").eq(0).children(".img").addClass("active").siblings(".text1").addClass("active").siblings(".text2").addClass("active").siblings(".text3").addClass("active").siblings(".yuanxiao").addClass("active").siblings(".nyx").children("img").addClass("active").parent().siblings(".yuanxiao").children("img").addClass("active1");
	$(".swiper-wrapper").siblings(".dl-left").addClass("active").siblings(".dl-right").addClass("active")
}
add();

$(".music").click(function(){
	if($(".music>img:nth-child(1)").hasClass("active")){
		$(".music>img:nth-child(1)").removeClass("active")
		$(".music>img:nth-child(2)").css("display","none")
	}else{
		$(".music>img:nth-child(1)").addClass("active")
		$(".music>img:nth-child(2)").css("display","block")
	}
})