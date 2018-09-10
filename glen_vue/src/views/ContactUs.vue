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
<style scoped>
    #section>div:last-child{
        border: 1px solid #e0f6f9;
    }
    #section>div:last-child>div:first-child{
        background:#eefafc;
    }
    #section>div:last-child>div:first-child{
        padding: 1rem 2rem;
        font-size: 1.5rem;
        font-weight: bold;
    }
    #section>div:last-child>div:first-child+div{
        margin: 1rem 2rem;
    }
    @media screen and (min-width:768px ){
        table{
            width: 600px;
            margin: auto;
        }
    }
    @media screen and (max-width:767px ){
        table{
            width: 100%;
        }
    }
    #section>div:last-child table tr>td:first-child{
        text-align: right;
    }
    #section>div:last-child table tr>td>input,textarea,table>tbody>tr>td>div{
        margin-top: 1rem;
        width: 80%;
    }
    #section>div:last-child table tr:last-child{
        text-align: center;
    }
    #section>div:last-child textarea{
        height: 100px;
        resize: none;
    }
    #section>div:last-child table tr>td>span{
        color: red;
    }
    #section>div:last-child #sent{
        padding: 0.2rem 2rem;
        color: #fff;
        background: #ff9c00;
        border: none;
    }
</style>
