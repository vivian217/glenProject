<template>
  <div>
    <Banner></Banner>
    <section id="section" class="clearfix">
      <div>
        <router-link to="/">主页</router-link>
        <span>&gt;&nbsp;产品知识</span>
      </div>
      <div>
        <SubNav1></SubNav1>
        <Contact></Contact>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">
              <span>不锈钢管件制造工艺</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>无缝弯头优势总结</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>不锈钢管制造工艺</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>不锈钢弯头与碳钢弯头不同</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>管件类型</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>管道配件</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>配件中弯头的分类</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>配件技术要求</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>管件过程</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>管件加工方法</span>
              <span>[2018.04.27]</span>
            </a>
          </li>
        </ul>
        <div class="pages mt-5">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled"><a href="#" class="page-link">首页</a></li>
            <li class="page-item disabled"><a href="#" class="page-link">上一页</a></li>
            <li class="page-item active"><a href="#" class="page-link">1</a></li>
            <li class="page-item"><a href="#" class="page-link">2</a></li>
            <li class="page-item"><a href="#" class="page-link">下一页</a></li>
            <li class="page-item"><a href="#" class="page-link">末页</a></li>
            <li class="page-item disabled"><a href="#" class="page-link border-top-0 border-right-0 border-bottom-0">1/2</a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Banner from '@/components/banner.vue'
  import SubNav1 from '@/components/subnav1.vue'
  import Contact from '@/components/subContact.vue'
  export default {
      components:{
          Banner,
          SubNav1,
          Contact
      }
  }
</script>
<style scoped>
    #section>div:last-child{
        border: none;
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
    #section>div:last-child>ul>li{
        position: relative;
        border-bottom: 1px dashed #999;
        padding: 0.5rem 0;
        margin: 0 0.5rem;
    }
    #section>div:last-child>ul>li>a{
        color: #999;
    }
    #section>div:last-child>ul>li>a:hover{
        color: #333;
    }
    #section>div:last-child>ul>li>a>span:last-child{
        position: absolute;
        right: 0;
        font-size: 0.8rem;
    }
</style>