<template>
    <div id="my_main">
        <!--首页轮播图-->
        <Carousel></Carousel>
        <!--公司大致介绍-->
        <div class="row pt-5 my_width_xl" id="introduce">
            <div class="col-md-6 pr-sm-5 m-md-0 m-sm-5 mr-md-3">
                <div class="my_img m-auto">
                    <img src="img/index/glen_employee.jpg" alt="" class="img-fluid"/>
                </div>
            </div>
            <div class="col-md-5 m-md-0 m-sm-5 ml-md-3">
                <p class="my_color font-weight-bold">//如有困难请与我们联系</p>
                <h3 class="font-weight-bold py-3">关于我们</h3>
                <span class="d-block mb-2"></span>
                <p class="text-secondary">
                    固蓝法兰专业从事线筒制造管、焊接覆盖件和锻件。<br/>
                    2006年开始，法兰和对焊件也成为我们重要的产品。<br/>
                    双相钢、超级双相钢、铜镍合金90/10以及不锈钢是我们的优势原材料。<br/>
                    我们所有的车间都经过了英国LR劳氏船级社、美国ABS船级社、法国BV船级社、挪威DNV-GL船级社、日本海事协会NK、韩国船级社KR和中国船级社CCS的批准。<br/>
                    我们的产品服务于造船、近海工程和液化天然气液化石油气项目。<br/>
                    我们已准备好为您提供高质量的服务。
                </p>
                <p class="font-weight-bold my-5">联系我们！我们会在30分钟内回复！</p>
                <router-link to="/about-us" class="btn px-5 py-2 text-white">更多详情</router-link>
            </div>
        </div>
        <!--主要产品-->
        <Products></Products>
        <!--热门产品-->
        <HotPro></HotPro>
        <!--新闻部分：设备和质检-->
        <div id="my_news" class="pb-5">
            <div class="news_bg"></div>
            <!--标题部分-->
            <div class="my_title pt-3">
                <h3>设备和质检</h3>
                <span></span>
            </div>
            <div class="my_width_xl">
                <!--带图片的新闻-->
                <div class="row pb-1">
                    <div class="col-sm-6 p-0 float-left bg-white">
                        <div class="news_img float-left">
                            <a href="#" target="_blank"><img src="img/index/Production_Equipments.jpg" alt=""/></a>
                        </div>
                        <div class="news_text p-3 float-left">
                            <a href="#" class="font-weight-bold">生产设备</a>
                            <span class="small text-secondary d-block">2017年6月1日</span>
                            <p class="text-secondary py-3">等离子切割机、折弯机、冷压机、滚压机、滚丸清理机、数控机床</p>
                            <a href="#" class="btn py-1 px-4 text-white">更多详情</a>
                        </div>
                    </div>
                    <div class="col-sm-6 p-0 float-left bg-white">
                        <div class="news_img float-left">
                            <a href="#" target="_blank"><img src="img/index/Products_Quality_Control.jpg" alt=""/></a>
                        </div>
                        <div class="news_text p-3 float-left">
                            <a href="#" class="font-weight-bold">产品质量控制</a>
                            <span class="small text-secondary d-block">2017年6月1日</span>
                            <p class="text-secondary py-3">
                                1、原材料切割前检验 <br/>
                                2、通过序列号和计算机进行过程控制 <br/>
                                3、尺寸检验
                            </p>
                            <a href="#" class="btn py-1 px-4 text-white">更多详情</a>
                        </div>
                    </div>
                </div>
                <!--文字新闻-->
                <ul class="list-unstyled d-flex flex-wrap">
                    <li class="d-flex pt-5">
                        <div class="date px-3">
                            <span>16</span>
                            <span>2018.5</span>
                        </div>
                        <div class="text w-100 px-3">
                            <a href="#">戴安娜赢得了纽卡斯尔的散装货船租赁合同</a>
                            <p class="pt-5 mb-0">在希腊，一艘散装货船的所有者戴安娜航运宣布，它已与新加坡的科赫公司签署了一份时间租船协议，以购买纽卡斯尔的散装货船。</p>
                        </div>
                    </li>
                    <li class="d-flex pt-5">
                        <div class="date px-3">
                            <span>16</span>
                            <span>2018.5</span>
                        </div>
                        <div class="text w-100 px-3">
                            <a href="#">泛海航运第一季度净利润同比增长23%</a>
                            <p class="pt-5 mb-0">新加坡上市的船东潘远洋航运公司最近宣布了2018年第一季度的业绩。</p>
                        </div>
                    </li>
                    <li class="d-flex pt-5">
                        <div class="date px-3">
                            <span>16</span>
                            <span>2018.5</span>
                        </div>
                        <div class="text w-100 px-3">
                            <a href="#">英斯博鲁的散装货船被导弹击中</a>
                            <p class="pt-5 mb-0">据路透社报道，5月12日深夜，一艘装载着小麦的土耳其散装货船“INCE INEBOLU”在驶往也门的萨勒克港时被导弹击中。</p>
                        </div>
                    </li>
                    <li class="d-flex pt-5">
                        <div class="date px-3">
                            <span>16</span>
                            <span>2018.5</span>
                        </div>
                        <div class="text w-100 px-3">
                            <a href="#">一艘化学船上的船员被烧伤</a>
                            <p class="pt-5 mb-0">根据美国海岸警卫队的消息，在5月11日晚，挪威船东斯托尔特油轮公司“Stolt Perseverance”化工船的一名49岁的船员，被船上...</p>
                        </div>
                    </li>
                </ul>
                <div class="text-center py-3">
                    <router-link to="/equipment" class="btn text-white px-5 py-2">更多信息</router-link>
                </div>
            </div>
        </div>
        <div class="my_connect my_bg ">
            <div class="row pb-1">
                <div class="col-md-6 px-0">
                    <img src="img/index/footer.jpg" alt=""/>
                    <div class="connect_icon position-absolute">
                        <a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a><a href="#"></a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="email-box mt-xl-3 pt-xl-5 pt-lg-4 pt-sm-3">
                        <p class="text-white font-weight-bold mb-1">关注我们的时事通讯</p>
                        <p class="text-white pb-xl-4 pb-lg-3 pb-md-1" style="white-space: nowrap;">注册我们的时事通讯，获得更多的活动和促销！</p>
                        <form action="#" id="emailForm">
                            <p class="email py-2 px-3">
                                <input type="email" name="email" placeholder="请在此处输入邮箱" class="bg-transparent border-0" v-model="email"/>
                                <input type="button" class="border-0" @click="email_check"/>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Carousel from '@/components/index/Carousel.vue'
    import Products from '@/components/index/Products.vue'
    import HotPro from '@/components/index/HotPro.vue'
    import "@/assets/css/index.css"
    import $ from "jquery"
    export default {
        components:{
            Carousel,
            Products,
            HotPro
        },
        data(){
            return{
                email:""
            }
        },
        created(){

        },
        methods:{
            email_check(){
                var reg=/^[a-z0-9]+@[a-z0-9]+\.com(\.[a-z]+)?$/i;
                if(reg.test(this.email)){
                    $("#emailForm").submit()
                }else{
                    alert("请输入有效的邮箱地址...");
                };
            }
        }
    }
</script>

<style scoped>
    [v-cloak]{
        display: none;
    }
</style>