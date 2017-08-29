'use strict';

    $(function() {
        if ($(".hunt-aspect-side").length == 0) {
            $(".null").show();
        }
        //切换
        $(".hunt-aspect").eq(0).show();
        $(".header-top").find("i").eq(0).addClass("h");
        $(".header-top").find("i").on("click", function() {
            var i = $(this).index();
            $(".header-top").find("i").eq(i).addClass("h").siblings("i").removeClass("h");
            $(".hunt-aspect").eq(i).show().siblings(".hunt-aspect").hide();
        })
        //删除
        $(".remove").on("click",function(){
            $(this).parents(".hunt-aspect-center").remove();
            
        })
        //勾选
        $(".hunt-aspect-side-left").on("click",function(){
            if($(this).hasClass("h")){
                $(this).removeClass("h");
            }else{
                $(this).addClass("h");
            }
        })
        //信息管理
        $("input[type='text']").on("input",function(){

                $(this).siblings("p").hide();
            });
        $("input[type='text']").on("blur",function(){
          
            if($(this).val()==""){
                $(this).siblings("p").show();
            }else{
                $(this).siblings("p").hide();
            }
        })
        $("input[type='radio']").on("change",function(){
            if($(this).is(":checked")){
               if($(this).next("em").text()=="企业"){
                   $(".firm").show();
               }else if($(this).next("em").text()=="个人"){
                   $(".firm").hide();
                   $(".person").children("input[type='radio']").attr("checked",true)
               }
            }
            if($(".wy").is(":checked")){
                $(".private").show();
            }else{
                $(".private").hide();
            }
        })
        var sj = /^1[34578]\d{9}$/;
        $(".phone").on("blur",function(){
            var phone = $(".phone").val();
            if (phone != "" && sj.test(phone)) {
                $(this).siblings("p").hide();
            }else{
                $(this).siblings("p").show();
            }
        })

       
    })
