$(function(){
  if(typeof jQuery!=="function")
    throw new Error("my-ui依赖于jQuery，必须先引入jquery.js");
  else {
    $("form").submit(function(e) {
      if ($("#email").val() == "") {
        e.preventDefault();
        alert("请输入邮箱...");
        $("[name=email]").focus();
      } else {
        var reg = /^\w+@[a-z0-9]+(.com)+.*$/;
        if (!reg.test($("#email").val())) {
          e.preventDefault();
          alert("邮箱格式有误，请重新输入...");
          $("[name=email]").focus();
        } else {
          if ($("textarea").val() == "") {
            e.preventDefault();
            alert("内容不能为空...");
            $("textarea").focus();
          }
        }
      }
    })
  }
})
