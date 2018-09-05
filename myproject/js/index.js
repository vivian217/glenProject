//首页js
$(function () {
  //搜索
  var searchForm=document.forms[0];
  var search=searchForm.elements[0];
  search.onfocus=function(){
    var search=this;
    if(search.value=="请输入搜索产品...")
      search.value="";
  }
  search.onblur=function(){
    if(this.value=="")
      this.value="请输入搜索产品...";
  }
  //图片鼠标经过div显示
  var imgDiv=$("#products>div.row>div");
  imgDiv.hover(function () {
    $(this).find(".cover").css("opacity","1");
  },function () {
    $(this).find(".cover").css("opacity","0");
  })
  //邮箱验证
  var emailForm=document.forms[1];
  var email=emailForm.elements[0];
  var btn2=emailForm.elements[1];
  var reg=/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i;
  btn2.onclick=function(){
    if(reg.test(email.value))
      emailForm.submit();
    else
      alert("请输入有效的邮箱地址...");
  }
})
