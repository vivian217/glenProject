<template>
  <div>
    <Banner></Banner>
    <section id="section" class="clearfix">
      <div>
        <router-link to="/">主页</router-link>
        <span>&gt;&nbsp;联系我们</span>
      </div>
      <div>
        <SubNav2></SubNav2>
        <Contact></Contact>
      </div>
      <div>
        <div>重庆固蓝法兰有限公司</div>
        <div>
          <p>如果你有任何关于报价或合作的意向，请向info@glenflange.com给我们发电子邮件，或者使用以下询盘表格。我们的销售代表将在24小时内与您联系。谢谢你对我们的产品感兴趣。</p>
          <form action="#">
            <table>
              <tr>
                <td>姓名：</td>
                <td><input type="text" name="uname"/></td>
              </tr>
              <tr>
                <td><span>*</span>邮箱：</td>
                <td><input type="text" name="email" id="email" placeholder="请在这里输入你的电子邮件，这是非常重要的！"/></td>
              </tr>
              <tr>
                <td>手机号：</td>
                <td><input type="text" name="phone"/></td>
              </tr>
              <tr>
                <td>公司：</td>
                <td><input type="text" name="company"/></td>
              </tr>
              <tr>
                <td>标题：</td>
                <td><input type="text" name="title"/><br/></td>
              </tr>
              <tr>
                <td><span>*</span>内容：</td>
                <td><textarea name="content" id="content" placeholder="请包括尺寸、重量、目的地港口等细节，以便我们能报出最好的价格。"></textarea></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <div><button id="sent">发送</button></div></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import "@/assets/css/my_boot.css"
  import "@/assets/css/my_boot_part3.css"
  import "@/assets/css/contact_us.css"
  import Banner from '@/components/banner.vue'
  import SubNav2 from '@/components/subnav2.vue'
  import Contact from '@/components/subContact.vue'
  export default {
      components:{
          Banner,
          SubNav2,
          Contact
      }
  }
</script>

