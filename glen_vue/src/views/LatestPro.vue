<template>
  <div>
    <Banner></Banner>
    <section id="section" class="clearfix">
      <div>
        <router-link to="/">主页</router-link>
        <span>&gt;&nbsp;项目</span>
      </div>
      <div>
        <SubNav2></SubNav2>
        <Contact></Contact>
      </div>
      <div>
        <div>重庆固蓝法兰有限公司</div>
        <div>
          <p>
            <span>参加上海海事博览会</span>
            <a href="documents/Marintec-China.pdf">
              <img src="img/index/pdf.png" alt="参加上海海事博览会" title="参加上海海事博览会"/>
            </a>
          </p>
          <p>
            <span>固蓝发往克罗地亚的项目</span>
            <a href="documents/Glen-projects-delivery-to-Croatiad.pdf">
              <img src="img/index/pdf.png" alt="固蓝发往克罗地亚的项目" title="固蓝发往克罗地亚的项目"/>
            </a>
          </p>
          <p>
            <span>固蓝发往希腊的项目</span>
            <a href="documents/Glen-projects-delivery-to-Greece.pdf">
              <img src="img/index/pdf.png" alt="固蓝发往希腊的项目" title="固蓝发往希腊的项目"/>
            </a>
          </p>
          <p>
            <span>固蓝发往美国的船舶修理专用管道</span>
            <a href="documents/Project-delivery-to-USA-special-pipe-for-ship-repair.pdf">
              <img src="img/index/pdf.png" alt="固蓝发往美国的船舶修理专用管道" title="固蓝发往美国的船舶修理专用管道"/>
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import "@/assets/css/my_boot.css"
  import "@/assets/css/my_boot_part3.css"
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
