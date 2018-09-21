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
            <div class="row mt-3">
                <div class="col-md-5 px-lg-3 px-md-0">
                    <div class="card border-0 position-relative mr-0">
                        <img :src="pics[0].pic" alt="" :key="pics[0].id"/>
                        <div id="mask" class="position-absolute"></div>
                        <div id="supermask" class="position-absolute"></div>
                        <div id="div-lg" class="position-absolute"></div>
                        <div class="card-body p-0 my-2 text-center">
                            <img src="/img/detail/qy-btuleft.png" alt="" class="btn p-0 border-0 float-left mt-2"/>
                            <div class="d-inline-block">
                                <ul>
                                    <li v-for="(item,i) in pics" :class="i==0?'active':''" :data-index="i"><img :src="item.pic" alt="" :key="item.id"/></li>
                                </ul>
                            </div>
                            <img src="/img/detail/qy-bturight.png" alt="" class="btn p-0 border-0 float-right mt-2"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-7 pl-lg-0 pl-md-5">
                    <h5 class="px-5 py-3 ml-lg-0 ml-md-5 text-center font-weight-bold sec_bg title_color">{{specs[0].title}}</h5>
                    <p class="ml-lg-0 ml-md-5">{{specs[0].subtitle}}</p>
                    <a href="#inquiry" class="btn text-white px-4 ml-lg-0 ml-md-5">发送询盘</a>
                </div>
            </div>
            <h6 class="sec_bg px-5 py-3 font-weight-bold title_color">产品详情</h6>
            <div class="mx-5 mt-3 detail" v-html="specs[0].details">
            </div>
            <h6 class="sec_bg px-5 py-3 font-weight-bold title_color" id="inquiry">询价</h6>
            <div class="mt-3 mb-5">
                <Inquery></Inquery>
            </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Banner from '@/components/banner.vue'
  import SubNav1 from '@/components/subnav1.vue'
  import Contact from '@/components/subContact.vue'
  import Inquery from '@/components/Inquery.vue'
  import $ from 'jquery'
  export default {
      components:{
          Banner,
          SubNav1,
          Contact,
          Inquery
      },
      data(){
          return {
              pid:this.$route.params.pid,
              pics:[{id:"",pic:""}],
              specs:[{pid:"",title:"",subtitle:"",details:""}]
          }
      },
      created(){},
      mounted(){
          this.$axios.get("http://localhost:6060/prodetail?pid="+this.pid).then(res=>{
            var {pics,specs}=res.data;
            this.pics=pics;
            this.specs=specs;
              /*放大镜*/
              var ulImgs=$("div.card>div.card-body>div>ul");
              ulImgs.css({
                  width:this.pics.length*73+"px"
              });
              $("#div-lg").css({
                  background:`url(${this.pics[0].pic})`
              });
              ulImgs.on("click","img",function(){
                  $(this).parent().addClass("active").siblings().removeClass("active");
                  $("div.card>img")[0].src=$(this)[0].src;
                  $("#div-lg").css({
                      background:`url(${$(this)[0].src})`
                  });
              });
              $("#supermask").hover(function(){
                  $("#mask").show();
                  $("#div-lg").show();
              },function(){
                  $("#mask").hide();
                  $("#div-lg").hide();
              });
              $("#supermask").mousemove(function(e){
                  var {offsetX,offsetY}=e;
                  var top=offsetY-77.5;
                  var left=offsetX-77.5;
                  top=top<0?0:top>155?155:top;
                  left=left<10?10:left>165?165:left;
                  $("#mask").css({
                      top:top+"px",
                      left:left+"px"
                  });
                  $("#div-lg").css({
                      backgroundPosition:`-${2.3*(left-10)}px -${2.3*top}px`
                  });
              });


              /*左边按钮*/
              var btnLeft=ulImgs.parent().prev();
              btnLeft.click(function(){
                  var l=ulImgs.children().length;
                  var l_mean;
                  if(l<=4){
                      l_mean=0;
                  }else{
                      l_mean=l-4;
                  }
                  var w=73;
                 var li=ulImgs.children(".active");
                 var i=li[0].dataset.index;
                 i--;
                 if(i<0){
                     i=l-1;
                 }
                 ulImgs.children().eq(i).addClass("active").siblings().removeClass("active");
                 var ml=i*w;
                 if(ml<=l_mean*w){
                     ulImgs.css({marginLeft:-ml+"px"})
                 }else{
                     ulImgs.css({marginLeft:-(l_mean*w)+"px"})
                 }
                 li=ulImgs.children(".active");
                  $("div.card>img")[0].src=li.children()[0].src;
                  $("#div-lg").css({
                      background:`url(${li.children()[0].src})`
                  });
              });
              /*右边按钮*/
              var btnRight=ulImgs.parent().next();
              btnRight.click(function(){
                  var l=ulImgs.children().length;
                  var l_mean;
                  if(l<=4){
                      l_mean=0;
                  }else{
                      l_mean=l-4;
                  }
                  var w=73;
                  var li=ulImgs.children(".active");
                  var i=li[0].dataset.index;
                  i++;
                  if(i>=l)i=0;
                  ulImgs.children().eq(i).addClass("active").siblings().removeClass("active");
                  var ml=(i-3)*w;
                  if(i<=3){
                      ulImgs.css({marginLeft:0})
                  }else{
                      ulImgs.css({marginLeft:-ml+"px"})
                  }
                  li=ulImgs.children(".active");
                  $("div.card>img")[0].src=li.children()[0].src;
                  $("#div-lg").css({
                      background:`url(${li.children()[0].src})`
                  });
              })
          });

      },
      methods:{
      }
  }
</script>
<style scoped>
    div.card{
        width: 330px;
    }
    div.card>img{
        width: 310px;
        height: 310px;
        margin-left: 10px;
    }
    #mask{
        width:155px;
        height: 155px;
        left:10px;
        opacity: .5;
        background: #fff;
        display: none;
    }
    #supermask{
        width: 310px;
        height: 310px;
        left:10px;
    }
    #div-lg{
        width: 356.5px;
        height: 356px;
        left: 330px;
        z-index: 1000;
        /*border: 1px solid #7bd9e7;*/
        display: none;
    }
    div.card>div.card-body>div{
        width: 284px;
        overflow: hidden;
    }
    div.card>div.card-body>div>ul{
        transition:all 2000 linear;
    }
    div.card>div.card-body>div>ul>li{
        float: left;
        width: 65px;
        height: 50px;
        margin-right: 0.5rem;
        border: 1px solid transparent;
        overflow: hidden;
    }
    div.card>div.card-body>div>ul>li.active{
        border-color: red;
    }
    div.card>div.card-body>div>ul>li>img{
        width: 100%;
    }
    a.btn{
        background: #7bd9e7;
    }
    .title_color{
        color: #0d889a;
    }
    div.detail>div>a{
        border: 1px solid #ccc;
        color: #333;
        font-size: 0.8rem;
        padding: 0.2rem 1rem;
    }
</style>