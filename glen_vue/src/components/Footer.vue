<template>
    <footer id="footer">
        <div>
            <div class="row my_width m-auto">
                <div class="col-xl-3 col-sm-6 mt-4">
                    <h3 class="pb-2">联系我们</h3>
                    <ul class="list-unstyled mt-3">
                        <li class="d-flex">
                            <span class="mr-4 mt-2"></span>
                            <span>中国重庆市渝北区松牌路145号风华美锦商务楼26楼</span>
                        </li>
                        <li class="d-flex">
                            <span class="mr-4 mt-2"></span>
                            <span>+86-23-67964368 ex 804 +8613452337836</span>
                        </li>
                        <li class="d-flex">
                            <span class="mr-4 mt-1"></span>
                            <span><a href="mailto:info@glenflange.com">info@glenflange.com</a></span>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-3 col-sm-6 mt-4">
                    <h3 class="pb-2">目录</h3>
                    <ul class="list-unstyled mt-3">
                        <li class="pb-2">&gt;&nbsp;<router-link to="/products/type/1">管段</router-link></li>
                        <li class="py-2">&gt;&nbsp;<router-link to="/products/type/2">堆焊</router-link></li>
                        <li class="py-2">&gt;&nbsp;<router-link to="/products/type/3">订制管件</router-link></li>
                        <li class="py-2">&gt;&nbsp;<router-link to="/products/type/4">锻件</router-link></li>
                        <li class="py-2">&gt;&nbsp;<router-link to="/products/type/5">对焊件</router-link></li>
                        <li class="py-2">&gt;&nbsp;<router-link to="/products/type/6">法兰</router-link></li>
                    </ul>
                </div>
                <div class="col-xl-3 col-sm-6 mt-4">
                    <h3 class="pb-2">链接</h3>
                    <router-link to="https://www.facebook.com/Glen-Flange-Limited-662831980577025/" class="d-inline-block mt-3">Facebook</router-link>
                    <router-link to="https://twitter.com/glenflange1">LinkedIn</router-link>
                </div>
                <div class="col-xl-3 col-sm-6 mt-4">
                    <h3 class="pb-2">二维码</h3>
                    <img src="/img/index/erwei239551.jpg" alt="" class="mt-3"/>
                </div>
            </div>
        </div>
        <div>
            <div class="my_width m-auto copyright py-3 d-flex flex-wrap">
                <p class="px-2 m-0">版权&nbsp;&copy;&nbsp;重庆固蓝法兰有限公司所有</p>
                <ul class="list-unstyled m-0">
                    <li class="px-2 d-inline-block"><router-link to="/products">产品</router-link></li>
                    <li class="px-2 d-inline-block"><router-link to="/news">新闻</router-link></li>
                    <li class="px-2 d-inline-block"><router-link to="/info">技术</router-link></li>
                    <li class="px-2 d-inline-block"><router-link to="/latest-project">项目</router-link></li>
                    <li class="px-2 d-inline-block"><router-link to="/download">文件下载</router-link></li>
                    <li class="px-2 d-inline-block"><router-link to="/about-us">关于我们</router-link></li>
                    <li class="px-2 d-inline-block"><router-link to="/contact-us">联系我们</router-link></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
    import "@/assets/css/footer.css"
    export default {
    }
</script>

<style scoped>

</style>