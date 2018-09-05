$(function(){
  $.ajax({
    url:"http://localhost:63342/myproject/header.html",
    type:"get"
  }).then(res=>{
    document.getElementById("header")
      .innerHTML=res;
    var inq_bef=$(".inquiry_bef");
    var inq_aft=$(".inquiry_aft");
    var inq_bef_a1=inq_bef.children(":first-child");
    inq_bef_a1.click(function(e){
      e.preventDefault();
      $(this).parent().hide()
          .next().show();
      sub_inq.hide();
    });
    var inq_aft_a1=$(".inquiry_aft>ul>li:first-child>a");
    inq_aft_a1.click(function(e){
      e.preventDefault();
      inq_aft.hide();
      sub_inq.hide();
      inq_bef.show();
    });
    var sub_inq=$(".sub_inq");
    var inq_bef_a2=inq_bef.children(":nth-child(2)");
    var inq_aft_a3=$(".inquiry_aft>ul>li:nth-child(3)>a");
    inq_bef_a2.click(function(e){
      e.preventDefault();
      sub_inq.show().css("right",57);
    });
    inq_aft_a3.click(function(e){
      e.preventDefault();
      sub_inq.show().css("right",169);
    });
    var sub_close=$(".sub_inq>p>span");
    sub_close.click(function(){
      sub_inq.hide();
    })
  })
});

