'use strict';
$(function(){
    //类型
    $(".genre-li").eq(0).addClass("h");
    $(".serve i").eq(1).addClass("h");
    
    //地区选择
    $(".region").on("click",function(){
        $(".city").show();
    })
    $(".city-check").on("click",function(){
        $(".city").hide();
    })
    $(".city-li").on("click",function(){
        $(".region").siblings("i").text($(this).text());
        $(".city").hide();
    })
    //收藏商品
    $(".footer-part p:nth-child(2)").hide();
    $(".footer-part-collect").on("click",function(){
        if ($(".footer-part-collect").index($(this)) == 0) {
			$(this).hide();
			$(this).siblings(".footer-part-collect").show();
		} else{
			$(this).hide();
			$(this).siblings(".footer-part-collect").show();
		}
    })
    //立即咨询
    $(".footer-part-consult").on("click",function(){
        if ($(".footer-part-consult").index($(this)) == 0) {
			$(this).hide();
			$(this).siblings(".footer-part-consult").show();
		}
    })
    function scrollload(){
        var w_h=$(window).height();
        var a_h=$(".a").offset().top;
        var b_h=$(".b").offset().top;
        console.log(a_h);
        console.log(b_h);
        if(b_h<a_h){
            $(".bottom-top-ul").css({"position":"relative"});
        }else{
            $(".bottom-top-ul").css({"position":"fixed"});
            
        }
    }
    $(window).on("scroll",function(){
        scrollload();
    })
    //服务介绍
    $(".bottom-top-li").eq(0).addClass("h");
    $(".bottom-footer-li").eq(0).show();
    $(".bottom-top-li").on("click",function(){
         var i=$(this).index();
          $(".bottom-top-li").eq(i).addClass("h").siblings(".bottom-top-li").removeClass("h");
         $(".bottom-footer-li").eq(i).show().siblings(".bottom-footer-li").hide();
     })
})