$(function(){
  if(typeof jQuery!=="function")
    throw new Error("my-ui依赖于jQuery，必须先引入jquery.js");
  else {
    var $sec_list=$("#section>div:nth-child(2)>div>ul>li>ul");
    $sec_list.parent().hover(function(){
      $(this).children("a").addClass("active")
            .next().addClass("active");
    },function(){
      $(this).children("a").removeClass("active")
            .next().removeClass("active");
    })
    $sec_list.on("mouseenter", "li,a", function () {
      $(this).addClass("sec_bg");
    })
    $sec_list.on("mouseleave", "li,a", function () {
      $(this).removeClass("sec_bg");
    })
  }
})
