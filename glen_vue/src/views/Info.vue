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
            <li v-for="item in list">
                <router-link :to="'/info/detail/'+item.id">
                    <span>{{item.title}}</span>
                    <span>[{{item.date | dateFilter}}]</span>
                </router-link>
            </li>
        </ul>
        <div class="pages mt-5">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a href="#" class="page-link" @click.prevent="loadList(1)">首页</a></li>
                <li class="page-item"><a href="#" class="page-link" @click.prevent="loadList(pno-1)">上一页</a></li>
                <li class="page-item" v-for="i in pageTotal" :class="i==pno?'active':''"><a href="#" class="page-link" @click.prevent="loadList(i)">{{i}}</a></li>
                <li class="page-item"><a href="#" class="page-link" @click.prevent="loadList(parseInt(pno)+1)">下一页</a></li>
                <li class="page-item"><a href="#" class="page-link" @click.prevent="loadList(pageTotal)">末页</a></li>
                <li class="page-item disabled"><a href="#" class="page-link border-top-0 border-right-0 border-bottom-0">{{pno}}/{{pageTotal}}</a></li>
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
  import $ from 'jquery'
  export default {
      components:{
          Banner,
          SubNav1,
          Contact
      },
      data(){
          return{
              list:[],
              pno:1,
              pageTotal:0
          }
      },
      mounted(){
          this.loadList(this.pno)
      },
      methods: {
          loadList(pno) {
              this.$axios.get("http://localhost:6060/info?pno=" + pno).then(res => {
                  var {pno, pTotal, data} = res.data;
                  this.pno = pno;
                  this.pageTotal = pTotal;
                  this.list = data;
                  if (this.pno == 1) {
                      $(".pages>ul").children(":lt(2)").addClass("disabled");
                  } else {
                      $(".pages>ul").children(":lt(2)").removeClass("disabled");
                  }
                  if (this.pno == this.pageTotal) {
                      $(".pages>ul").children(":gt(" + this.pageTotal + ")").addClass("disabled");
                  } else {
                      $(".pages>ul").children(":gt(" + this.pageTotal + ")").removeClass("disabled");
                  }
              })
          }
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
    #section>div:last-child>div.pages .page-item .page-link{
        color: #666;
    }
    #section>div:last-child>div.pages .page-item.active .page-link{
        background-color: #0c6ca3;
        border-color: transparent;
        color: #fff;
    }
</style>