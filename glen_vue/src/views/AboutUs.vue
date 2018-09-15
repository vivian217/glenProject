<template>
  <div>
    <Banner></Banner>
    <section id="section" class="clearfix">
      <div>
        <a href="index.html">主页</a>
        <span>&gt;&nbsp;关于我们</span>
      </div>
      <div>
        <SubNav2></SubNav2>
        <Contact></Contact>
      </div>
      <div>
        <div>重庆固蓝法兰有限公司</div>
        <div>
          <p>自从2012年开始重庆固蓝法兰有限公司一直专注于管件和法兰行业。</p>
          <p>为了保证产品符合海洋和近海水平，我们的工厂都是经过英国LR劳氏船级社、美国ABS船级社、法国BV船级社、挪威DNV-GL船级社、日本海事协会NK、韩国船级社KR和中国船级社CCS的认证的。</p>
          <p>帮助客户更强是我们的使命。</p>
          <hr/>
          <h4>公司环境</h4>
          <img src="/img/aboutus/office.jpg" alt=""/>
          <p>
            员工：11人 <br/>
            国际销售部：4人 <br/>
            市场部和网络营销部：1人 <br/>
            工程师：1人 <br/>
            助理工程师&图纸专员：1人 <br/>
            检验员：2人(兼职) <br/>
            财务人员：1人 <br/>
            文档以及物流人员：1人 <br/>
            我们的工程师从事中国的管件和法兰行业已经15年了。因此，我们可以提供高质量的咨询和图纸设计。
          </p>

          <div>
            <img src="/img/aboutus/engineer.jpg" alt=""/>
            <p>电话:+86-23-67964368-806</p>
            <p>传真: +86-23-67504207</p>
            <p>电子邮箱:engineer@glenflange.com</p>
            <p>让图纸说话</p>
          </div>
          <div>
            <img src="/img/aboutus/engineer2.jpg" alt=""/>
            <p>电话:+86-23-67964368-806</p>
            <p>传真: +86-23-67504207</p>
            <p>电子邮箱:engineer@glenflange.com</p>
            <p>让事情简单</p>
          </div>
          <hr/>
          <h4>产品证书</h4>
          <img src="/img/aboutus/certificate.jpg" alt=""/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Banner from '@/components/banner.vue'
  import SubNav2 from '@/components/subnav2.vue'
  import Contact from '@/components/subContact.vue'
  import "@/assets/css/my_boot.css"

  export default {
      components:{
          Banner,
          SubNav2,
          Contact
      }
  }
</script>
<style scoped>
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
    #section>div:last-child>div>img{
        width: 100%;
    }
    #section>div:last-child>div>div{
        width: 50%;
        float: left;
        margin-bottom: 1rem;
    }
    #section>div:last-child>div>div>img{
        float: left;
        margin-right: 0.5rem;
    }
    #section>div:last-child>div>hr{
        clear: both;
    }
</style>