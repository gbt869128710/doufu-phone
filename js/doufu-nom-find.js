'use strict';

    $(function() {
        $(".content-ul").eq(0).show();
        //找回密码
        var sj = /^1[34578]\d{9}$/;
        $(".phone").on("blur",function(){
            var phone = $(this).val();
            if (phone != "") {
                    if (sj.test(phone)) {
                    $(this).siblings(".hint").children("p").hide();
                    $(this).parent(".content-li").next(".content-li").find(".gain").removeAttr("disabled");
                }else{
                    $(this).siblings(".hint").children("p").text("手机号不正确").show();
                    $(this).parent(".content-li").next(".content-li").find(".gain").attr("disabled",true);
                }
            }else{
                $(this).siblings(".hint").children("p").text("手机号不为空").show();
                $(this).parent(".content-li").next(".content-li").find(".gain").attr("disabled",true);
            }
        })
        $(".phone").on("input",function(){
            var phone = $(this).val();
            if (phone != ""&&sj.test(phone)) {
                $(this).siblings(".hint").children("p").hide();
                $(this).parent(".content-li").next(".content-li").find(".gain").removeAttr("disabled");
                
            }
        })
        $(".gain").on("click",function(){
            var name = $(this).val();
            second();  
            $(this).parent(".hint").siblings(".code").removeAttr("disabled");
        })
        $(".code").on("blur",function(){
            var code = $(this).val();
            if(code!=nume){
                $(this).siblings(".hint").children("p").show();
                $(this).parents(".content-ul").siblings(".popular-li-center").find(".finish").attr("disabled",true);
            }else{
                $(this).siblings(".hint").children("p").hide();
                $(this).parents(".content-ul").siblings(".popular-li-center").find(".finish").removeAttr("disabled");
            }
        })
        //下一步
       
        $(".finish").on("click",function(){
            if($(this).val()=="下一步"){
                $(".content-ul").eq(1).show();
                $(".content-ul").eq(0).hide();
                $(".hunt").hide();
                $(this).val("完成").attr("disabled",true);
            }
        })
        
        $(".cipher").on("blur",function(){
            var cipher = $(this).val();
            if (cipher != "" ) {
                $(this).siblings(".hint").children("p").hide();
                $(this).parent(".content-li").next(".content-li").find(".affirm").removeAttr("disabled");
            }else{
                $(this).siblings(".hint").children("p").show();
                $(this).parent(".content-li").next(".content-li").find(".affirm").attr("disabled",true);
            }
        })
        $(".affirm").on("blur",function(){
            var affirm = $(this).val();
            var cipher = $(".cipher").val();
            if (affirm ==cipher ) {
                $(this).siblings(".hint").children("p").hide();
                $(this).parents(".content-ul").siblings(".popular-li-center").find(".finish").removeAttr("disabled");
            }else{
                $(this).siblings(".hint").children("p").show();
                $(this).parents(".content-ul").siblings(".popular-li-center").find(".finish").attr("disabled",true);
            }
        })
        
//短信验证码
    var time = 60;
    var nume = '';
    var sta = 0;
        var set;
    function second(){
        nume = '';
        sta = 1;
         set = setInterval(function() {
            if (time > 0) {
                time--;
                $(".gain").val(time + "s");
                $(".gain").attr("disabled", true);
            } else {
                clearInterval(set);
                sta = 0;
                $(".gain").val("点击获取");
                $(".gain").removeAttr("disabled");
            }
        }, 1000)
        time = 60;
        for (var i = 0; i < 6; i++) {
            nume += Math.round(Math.random() * 9)
        };
        console.log(nume);
    }
    })
        

