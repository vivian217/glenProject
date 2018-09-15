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
          <Inquery></Inquery>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Banner from '@/components/banner.vue'
  import SubNav2 from '@/components/subnav2.vue'
  import Contact from '@/components/subContact.vue'
  import Inquery from '@/components/Inquery.vue'

  export default {
      components:{
          Banner,
          SubNav2,
          Contact,
          Inquery
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
</style>
