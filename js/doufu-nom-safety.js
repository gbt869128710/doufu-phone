'use strict';

    $(function() {
        //切换
        $(".hunt-aspect").eq(0).show();
        $(".header-top").find("i").eq(0).addClass("h");
        $(".header-top").find("i").on("click", function() {
            var i = $(this).index();
            $(".header-top").find("i").eq(i).addClass("h").siblings("i").removeClass("h");
            $(".hunt-aspect").eq(i).show().siblings(".hunt-aspect").hide();
        })
        //输入 
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
        //修改密码
        $(".used").on("blur",function(){
            var used = $(this).val();
            if (used != "") {
                $(this).siblings("p").hide();
                $(this).parents(".hunt-aspect-manage").next(".hunt-aspect-manage").find(".cipher").removeAttr("disabled");
            }else{
                $(this).siblings("p").show();
                $(this).parents(".hunt-aspect-manage").next(".hunt-aspect-manage").find(".cipher").attr("disabled",true);
            }
        })
        $(".cipher").on("blur",function(){
            var cipher = $(this).val();
            if (cipher != "") {
                $(this).siblings("p").hide();
                $(this).parents(".hunt-aspect-manage").next(".hunt-aspect-manage").find(".cipher-code").removeAttr("disabled");
                slider.init();
            }else{
                $(this).siblings("p").show();
                $(this).parents(".hunt-aspect-manage").next(".hunt-aspect-manage").find(".cipher-code").attr("disabled",true);
            }
        })
        $(".cipher-code").on("input",function(){
            var cipher_code = $(this).val();
            var cipher = $(this).parents(".hunt-aspect-manage").prev(".hunt-aspect-manage").find(".cipher").val();
            if (cipher_code != ""&&cipher != "") {
                if(cipher_code==cipher){
                    
                    $(this).siblings("p").hide();
                    $(this).parents(".hunt-aspect-manage").next(".hunt-aspect-manage").find(".verify").removeAttr("disabled");
                }
            }else{
                $(this).siblings("p").show();
                $(this).parents(".hunt-aspect-manage").next(".hunt-aspect-manage").find(".verify").attr("disabled",true);
            }
        })
        $(".verify").on("click",function(){
            second();
            $(this).siblings(".code").removeAttr("disabled");
        })
        $(".code").on("input",function(){
            if($(this).val()==nume){
                $(this).siblings("p").hide();
                    $(this).parents(".hunt-aspect-manage").next(".footer").find(".affirm").removeAttr("disabled");
            }else{
                $(this).siblings("p").show();
                $(this).parents(".hunt-aspect-manage").next(".footer").find(".affirm").attr("disabled",true);
            }
        })
        //修改手机
        var sj = /^1[34578]\d{9}$/;
        $(".phone").on("blur",function(){
            var phone = $(".phone").val();
            if (phone != "" && sj.test(phone)) {
                $(this).siblings("p").hide();
                $(this).parents(".hunt-aspect-manage").next(".hunt-aspect-manage").find(".cipher").removeAttr("disabled");
            }else{
                $(this).siblings("p").show();
                $(this).parents(".hunt-aspect-manage").next(".hunt-aspect-manage").find(".cipher").attr("disabled",true);
            }
        })
        $(".cipher").on("input",function(){
            var phone = $(".cipher").val();
            if (phone != ""){
                slider.init();
            }
        })
        //确认修改
        $(".affirm").on("click",function(){
            $(this).parent(".footer").siblings(".hint").show();
            $("input").val("");
            $(".affirm").val("确认修改");
            $("input").attr("disabled",true);
            $(".used,.phone").removeAttr("disabled");
            clearInterval(set);
            sta = 0;
            $(".verify").val("点击获取");
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
                $(".verify").val(time + "s");
                $(".verify").attr("disabled", true);
            } else {
                clearInterval(set);
                sta = 0;
                $(".verify").val("点击获取");
                $(".verify").removeAttr("disabled");
            }
        }, 1000)
        time = 60;
        for (var i = 0; i < 6; i++) {
            nume += Math.round(Math.random() * 9)
        };
        console.log(nume);
    }
        //滑块
    var slider = new SliderUnlock("#slider",{
            successLabelTip : "验证码已发送"
        },function(){
            $(".enroll-code").show();
            second();
        });
    })
