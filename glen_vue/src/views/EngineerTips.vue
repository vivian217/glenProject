<template>
  <div>
    <Banner></Banner>
    <section id="section" class="clearfix">
      <div>
        <router-link to="/">主页</router-link>
        <span>&gt;&nbsp;工程师提示</span>
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
  import "@/assets/css/my_boot.css"
  import "@/assets/css/my_boot_part3.css"
  import "@/assets/css/et_eq.css"
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
