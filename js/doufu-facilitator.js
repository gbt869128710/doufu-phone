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
    //分类
    function stopPropagation(e) { 
        if (e.stopPropagation) 
        e.stopPropagation(); 
        else 
        e.cancelBubble = true; 
    } 
    $(document).bind('click',function(){ 
        $('.choose-select').hide(); 
    }); 
    
    $(".phone").on("click",function(e){
        stopPropagation(e);
        var i=$(this).index();
        if($(".choose-row").eq(i).hasClass("h")){
            $(".choose-row").eq(i).removeClass("h");
        }else{
            $(".choose-row").eq(i).addClass("h").siblings(".choose-row").removeClass("h");
        }
    })
    $(".choose-option").on("click",function(e){
        var i=$(this).parents(".choose-row").index();
        stopPropagation(e);
        $(this).parents(".choose-row").removeClass("h");
        $(".phone").eq(i).children(".phone-text").text($(this).children("p").text())
    })
    
})