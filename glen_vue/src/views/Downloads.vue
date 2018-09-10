<template>
  <div>
    <Banner></Banner>
    <section id="section" class="clearfix">
      <div>
        <router-link to="/">主页</router-link>
        <span>&gt;&nbsp;文件下载</span>
      </div>
      <div>
        <SubNav2></SubNav2>
        <Contact></Contact>
      </div>
      <div>
        <div>重庆固蓝法兰有限公司</div>
        <div>
          <p>
            <span>固蓝管道系统介绍</span>
            <a href="documents/1-GLEN-Piping-system-introduction.pdf">
              <img src="img/index/pdf.png" alt="固蓝管道系统介绍" title="固蓝管道系统介绍"/>
            </a>
          </p>
          <p>
            <span>固蓝管道配件介绍</span>
            <a href="documents/2-GLEN-Piping-fitting-introduction.pdf">
              <img src="img/index/pdf.png" alt="固蓝管道配件介绍" title="固蓝管道配件介绍"/>
            </a>
          </p>
          <p>
            <span>固蓝焊缝层介绍</span>
            <a href="documents/3-GLEN-Weld-overlay-introduction.pdf">
              <img src="img/index/pdf.png" alt="固蓝焊缝层介绍" title="固蓝焊缝层介绍"/>
            </a>
          </p>
          <p>
            <span>固蓝锻钢法兰介绍</span>
            <a href="documents/4-GLEN-Forging-steel-Flange-introduction.pdf">
              <img src="img/index/pdf.png" alt="固蓝锻钢法兰介绍" title="固蓝锻钢法兰介绍"/>
            </a>
          </p>
          <p>
            <span>固蓝切割法兰应用</span>
            <a href="documents/5-GLEN-Cutting-flange-application.pdf">
              <img src="img/index/pdf.png" alt="固蓝切割法兰应用" title="固蓝切割法兰应用"/>
            </a>
          </p>
          <p>
            <span>固蓝双相钢介绍</span>
            <a href="documents/6-GLEN-Duplex-stainless-Steel-introduction.pdf">
              <img src="img/index/pdf.png" alt="固蓝双相钢介绍" title="固蓝双相钢介绍"/>
            </a>
          </p>
          <p>
            <span>ASME B16.5-2009</span>
            <a href="documents/ASME.pdf">
              <img src="img/index/pdf.png" alt="ASME B16.5-2009" title="ASME B16.5-2009"/>
            </a>
          </p>
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
</style>