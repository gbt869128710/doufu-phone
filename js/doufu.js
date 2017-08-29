'use strict';
$(function(){
	//搜索框
	$(".search-icon").on("click",function(){
		$(".search").stop(true).animate({left: 0});
	})
	$(".search-back").on("click",function(){
		$(".search").stop(true).animate({left: "100%"});
        $(".seek").hide();
        $(".hunt").hide();
	})
    $(".search-seek-input").on("click",function(){
        $(".seek").show();
    })
     $(".search-seek-input").on("input",function(){
        $(".hunt").show();
         $(".seek").hide();
    })
    $(".seek-aspect-side").on("click",function(){
        $(".search-seek-input").val($(this).text());
        $(".seek").hide();
    })
    $(".seek").on("click",function(){
        $(".seek").hide();
    })
    //刷新
        var i=0;
    $(".refresh").on("click",function(){
        i++;
        $(this).css({"transform": "rotateZ("+i*360+"deg)"});
    })
    //地区选择
    $(".region").on("click",function(){
        $(".city").show();
    })
    $(".city-check").on("click",function(){
        $(".city").hide();
    })
    $(".city-li").on("click",function(){
        $(".region span").text($(this).text());
        $(".city").hide();
    })
    //分类
    
    $(".classify-left-li").eq(0).addClass("h");
    $(".classify-right").eq(0).show();
     $(".classify-left-li").on("click",function(){
         var i=$(this).index();
          $(".classify-left-li").eq(i).addClass("h").siblings(".classify-left-li").removeClass("h");
         $(".classify-right").eq(i).show().siblings(".classify-right").hide();
     })
    
})