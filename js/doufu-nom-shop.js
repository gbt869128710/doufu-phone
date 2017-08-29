'use strict';
$(function(){
    if($(".hunt-aspect-side").length==0){
            $(".null").show();
        }
    $(".header-top-left").find("i").text($(".hunt-aspect-side").length);
    $(".compile").on("click",function(){
        if($(this).text()=="编辑"){
            $(this).text("完成");
            $(".hunt").find("em").show();
        }else{
            $(this).text("编辑");
            $(".hunt").find("em").hide();
        }
    })
    //删除
    $(".remove").on("click",function(){
        $(this).parents(".hunt-aspect-side").remove();
        $(".header-top-left").find("i").text($(".hunt-aspect-side").length);
        money();
    })
    //勾选
    function money(){
		var arr=[];
		$(".hunt-aspect-side-left.h").siblings(".hunt-aspect-side-right").find(".money").each(function(){
            var money=parseInt($(this).text());
            var number=parseInt($(this).parents(".firm").siblings(".hunt-aspect-side-bottom").find(".number").text());
			arr.push(money*number);
		})
		var m=0;
		for(var i=0;i<arr.length;i++){
			m+=parseInt(arr[i])
		}
		$(".money-all").text(m);
        console.log(arr);
	}
    $(".hunt-aspect-side-left").on("click",function(){
        if($(this).hasClass("h")){
            $(this).removeClass("h");
        }else{
            $(this).addClass("h");
        }
        if($(".hunt-aspect-side-left.h").length==$(".hunt-aspect-side").length){
            $(".all").addClass("h")
        }else{
            $(".all").removeClass("h")
        }
        money();
    })
    //全选
    $(".all").on("click",function(){
        if($(this).hasClass("h")){
            $(this).removeClass("h");
            $(".hunt-aspect-side-left").removeClass("h");
        }else{
            $(this).addClass("h");
            $(".hunt-aspect-side-left").addClass("h");
        }
        money();
    })
    //加
    $(".plus").on("click",function(){
        var i=parseInt($(this).siblings(".number").text());
        i++;
        $(this).siblings(".number").text(i);
        money();
    })
    //减
    $(".minus").on("click",function(){
        var i=parseInt($(this).siblings(".number").text());
        if(i>1){
            i--;
        }
        $(this).siblings(".number").text(i);
        money();
    })
})