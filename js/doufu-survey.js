$(function(){
  $('input[type="checkbox"],input[type="radio"]').on("click",function(){
        
        if($(this).is(":checked")){
            $(this).parents(".div_table_radio_question").siblings(".div_title_question_all").find(".green").show();
            $(this).parents(".div_table_radio_question").siblings(".div_title_question_all").find(".choose").hide();
            $(".refer-choose").hide();
        }else{
            $(this).attr("checked",true);
        }
    })
    $(".refer-btn").on("click",function(){
        var b=0;
        var c=$('input[type="checkbox"],input[type="radio"]');
        for(var i=0;i<c.parents(".div_question").length;i++){
            var a=c.parents(".div_question").eq(i).find("input[type='checkbox']:checked,input[type='radio']:checked");
            var d=c.parents(".div_question").eq(i).find("input[type='checkbox']:checked,input[type='radio']");
            
            if(a.length>0){
                a.parents(".div_table_radio_question").siblings(".div_title_question_all").find(".choose").hide();  a.parents(".div_table_radio_question").siblings(".div_title_question_all").find(".green").show();
            }else{  d.parents(".div_table_radio_question").siblings(".div_title_question_all").find(".choose").show();
                d.parents(".div_table_radio_question").siblings(".div_title_question_all").find(".green").hide();
                b+=1;
            }
        }
        if(!b){
            
        }else{
            $(".refer-choose").children("span").text(b);
            $(".refer-choose").show();
        }
    })
    
})