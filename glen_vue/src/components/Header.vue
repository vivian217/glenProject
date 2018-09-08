<template>
  <header class="my_header_bg my_border" id="header">
    <div class="navbar navbar-expand-md navbar-dark p-0 my_width_xl">
      <a href="#" class="navbar-brand"><img src="img/index/glen_logo.png" alt=""/></a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#mynav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mynav">
        <ul class="navbar-nav ml-md-5 px-0">
          <li class="nav-item py-md-4"><router-link to="/" class="nav-link py-0 px-3 text-white my_font">主页</router-link></li>
          <li class="nav-item py-md-4 dropdown" id="product">
            <router-link to="/products" class="nav-link py-0 px-3 text-white my_font">产品</router-link>
            <ul class="dropdown-menu my_product my_header_bg m-0 p-0">
              <li class="dropdown-item px-md-2"><a href="#">管段</a></li>
              <li class="dropdown-item px-md-2"><a href="#">堆焊</a></li>
              <li class="dropdown-item px-md-2"><a href="#">订制管件</a></li>
              <li class="dropdown-item px-md-2"><a href="#">锻件</a></li>
              <li class="dropdown-item px-md-2"><a href="#">对焊件</a></li>
              <li class="dropdown-item px-md-2"><a href="#">法兰</a></li>
            </ul>
          </li>
          <li class="nav-item py-md-4"><router-link to="/equipment" class="nav-link py-0 px-3 text-white my_font">质检</router-link></li>
          <li class="nav-item py-md-4"><router-link to="/engineer-tips" class="nav-link py-0 px-3 text-white my_font">工程</router-link></li>
          <li class="nav-item py-md-4"><router-link to="/latest-project" class="nav-link py-0 px-3 text-white my_font">项目</router-link></li>
          <li class="nav-item py-md-4"><router-link to="/download" class="nav-link py-0 px-3 text-white my_font">文件下载</router-link></li>
          <li class="nav-item py-md-4 hidden_md"><router-link to="/about-us" class="nav-link py-0 px-3 text-white my_font">关于我们</router-link></li>
          <li class="nav-item py-md-4 hidden_md"><router-link to="/contact-us" class="nav-link py-0 px-3 text-white my_font">联系我们</router-link></li>
        </ul>
      </div>
    </div>
    <div class="inquiry_bef">
      <a href="#" @click.prevent="aft_show"><img src="img/sidebar/skf_01.png" alt=""/></a>
      <a href="#" @click.prevent="sub_show1"><img src="img/sidebar/skf_02.png" alt=""/></a>
      <a href="#" ><img src="img/sidebar/skf_03.png" alt=""/></a>
    </div>
    <div class="inquiry_aft">
      <ul class="list-unstyled p-0 m-0">
        <li><a href="#" @click.prevent="bef_show"><img src="img/sidebar/kf_01.png" alt=""/></a></li>
        <li><a href="mailto:info@glenflange.com"><img src="img/sidebar/eico2.png" alt=""/>info@glenflange.com</a></li>
        <li><a href="#"@click.prevent="sub_show2"><img src="img/sidebar/kf_02.png" alt=""/></a></li>
        <li>
          <p class="text-left mb-1 pl-2">关注我们：</p>
          <a href="https://www.facebook.com/Glen-Flange-Limited-662831980577025/"><img src="img/sidebar/fico2.png" alt=""/></a>
          <a href="https://twitter.com/glenflange1"><img src="img/sidebar/tico2.png" alt=""/></a>
          <a href="https://www.linkedin.com/company-beta/18159881/admin/updates/"><img src="img/sidebar/lico2.png" alt=""/></a>
          <a href="#"><img src="img/sidebar/gico2.png" alt=""/></a>
          <a href="#"><img src="img/sidebar/pico2.png" alt=""/></a>
        </li>
        <li><a href="#" ><img src="img/sidebar/kf_03.png" alt=""/></a></li>
      </ul>
    </div>
    <div class="sub_inq">
      <p>
        <span @click="sub_close"><img src="img/sidebar/close.png" alt=""/></span>
      </p>
      <p>如果您需要我们的回复，请发送您的联系信息给我们</p>
      <input type="text" placeholder="请输入邮箱..." name="sub_email" class="sub_email"/>
      <textarea name="sub_textarea" class="sub_textarea"></textarea>
      <a href="#"></a>
    </div>
  </header>
</template>

<script>
  import "@/assets/css/header.css"
  import $ from "jquery"
  export default {
      data(){return{}},
      methods:{
        aft_show(){
            $(".inquiry_bef").hide();
            $(".inquiry_aft").show();
            $(".sub_inq").hide();
        },
        bef_show(){
            $(".inquiry_bef").show();
            $(".inquiry_aft").hide();
            $(".sub_inq").hide();
        },
        sub_show1(){
            $(".sub_inq").show().css("right",57);
        },
        sub_show2(){
            $(".sub_inq").show().css("right",169);
        },
        sub_close(){
            $(".sub_inq").hide();
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
