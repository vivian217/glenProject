<template>
  <div>
    <Banner></Banner>
    <section id="section" class="clearfix">
      <div>
        <router-link to="/">主页</router-link>
        <span>&gt;&nbsp;产品</span>
      </div>
      <div>
        <SubNav1></SubNav1>
        <Contact></Contact>
      </div>
      <div>
        <h2>产品</h2>
        <ul>
          <li v-for="item in data" :key="item.pid">
            <router-link :to="'/products/detail/'+item.pid"><img :src="item.pic" alt=""/></router-link>
            <div>
              <h5><router-link :to="'/products/detail/'+item.pid">{{item.title}}</router-link></h5>
              <p>{{item.subtitle.substring(0,50)+"..."}}</p>
              <router-link :to="'/products/detail/'+item.pid" class="btn text-white py-0">更多详情</router-link>
            </div>
          </li>
        </ul>
        <div class="pages mt-5">
          <ul class="pagination justify-content-center">
            <li class="page-item"><a href="#" class="page-link" @click.prevent="reloadPage(1,fid,kw)">首页</a></li>
            <li class="page-item"><a href="#" class="page-link" @click.prevent="reloadPage(pno-1,fid,kw)">上一页</a></li>
            <li class="page-item " v-for="i in pageCount" :class="i==pno?'active':''"><a to="#" class="page-link" @click.prevent="reloadPage(i,fid,kw)">{{i}}</a></li>
            <li class="page-item"><a href="#" class="page-link" @click.prevent="reloadPage(parseInt(pno)+1,fid,kw)">下一页</a></li>
            <li class="page-item"><a href="#" class="page-link" @click.prevent="reloadPage(pageCount,fid,kw)">末页</a></li>
            <li class="page-item disabled"><a href="#" class="page-link border-top-0 border-right-0 border-bottom-0">{{pno}}/{{pageCount}}</a></li>
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
  import $ from "jquery"
  export default {
      components:{
          Banner,
          SubNav1,
          Contact
      },
      data(){
          return {
              fid:this.$route.params.fid,
              kw:this.$route.params.kw,
              count:"",//数据总量
              pSize:"",//每页数据条数
              pageCount:"",//总共页数
              pno:"",//当前页码
              data:[]//当前页数据
          }
      },
      created(){
        this.loadPage(1,this.fid,this.kw);
      },
      methods:{
          loadPage(pno,fid="",kw=""){
              var url=`http://localhost:6060/pro?pno=${pno}&fid=${fid}&kw=${kw}`;
              this.$axios.get(url).then(res=>{
                  var {pageCount,pno,data}=res.data;
                  this.data=data;
                  this.pno=pno;
                  this.pageCount=pageCount;
                  //console.log(this.pageCount);
                  if(this.pno==1){
                      $(".pages>ul").children(":lt(2)").addClass("disabled");
                  }else{
                      $(".pages>ul").children(":lt(2)").removeClass("disabled");
                  }
                  if(this.pno==this.pageCount){
                      $(".pages>ul").children(":gt("+this.pageCount+")").addClass("disabled");
                  }else{
                      $(".pages>ul").children(":gt("+this.pageCount+")").removeClass("disabled");
                  }
              })
          },
          reloadPage(pno,fid,kw){
              this.loadPage(pno,fid,kw);
          }
      }
  }
</script>
<style scoped>
    #section>div:last-child{
        padding: 1rem 2rem;
    }
    #section>div:last-child>ul>li{
        background: #eefafc;
        margin: 1rem 0;
        position: relative;
    }
    #section>div:last-child>ul>li>a>img{
        width: 242px;
        height: 242px;
    }
    #section>div:last-child>ul>li>div>h5>a{
        color: #333;
    }
    #section>div:last-child>ul>li>div{
        position: absolute;
        top: 15%;
        left: 25%;
        width: 70%;
        padding: 1rem;
        background: #fff;
        box-shadow: 5px 5px 10px #c2cfd2;
    }
    #section>div:last-child>ul>li>div>p{
        color: #999;
    }
    #section>div:last-child>ul>li>div>a.btn{
        background: #0c6ca3;
        transition: all .5s ease-out;
    }
    #section>div:last-child>ul>li>div>a.btn:hover{
        background: #192634;
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