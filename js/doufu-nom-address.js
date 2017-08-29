'use strict';

    $(function() {
        //勾选
        $(".tacitly-right").on("click",function(){
            if($(this).hasClass("h")){
                $(this).removeClass("h");
            }else{
                $(this).addClass("h");
            }
        })
        //信息管理
        $("input[type='text']").addClass("h");
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
       
    })
