'use strict';

    $(function() {
        //银行的下拉
        $(".choose").on("click", function() {
            $(".choose-ul").show();
        })
        $(".choose-li").on("click", function() {
            $(".choose-text").text($(this).text());
            $(".choose-ul").hide();
        })
        //支付宝号
        var sj = /^1[34578]\d{9}$/;
        $(".phone").on("blur",function(){
            var phone = $(this).val();
            if (phone != "" && sj.test(phone)) {
                $(this).siblings(".hint").children("p").hide();
                $(this).parent(".content-li").next(".content-li").find(".name").removeAttr("disabled");
            }else{
                $(this).siblings(".hint").children("p").show();
                $(this).parent(".content-li").next(".content-li").find(".name").attr("disabled",true);
            }
        })
        $(".name").on("blur",function(){
            var name = $(this).val();
            if (name != "" ) {
                $(this).parent(".content-li").next(".content-li").find(".gain").removeAttr("disabled");
            }else{
                $(this).parent(".content-li").next(".content-li").find(".gain").attr("disabled",true);
            }
        })
        $(".gain").on("click",function(){
            var name = $(this).val();
            second();  $(this).parent(".hint").siblings(".code").removeAttr("disabled");
        })
        $(".code").on("blur",function(){
            var code = $(this).val();
            if(code!=nume){
                $(this).siblings(".hint").children("p").show();
            }else{
                $(this).siblings(".hint").children("p").hide();
                
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
        

