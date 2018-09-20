<template>
    <div>
        <h3>关于我们</h3>
        <ul>
            <li @mouseenter="showSub" @mouseleave="hideSub">
                <a href="/products">产品</a>
                <ul>
                    <li><a href="/products/type/1">管段</a></li>
                    <li><a href="/products/type/2">堆焊</a></li>
                    <li><a href="/products/type/3">订制管件</a></li>
                    <li><a href="/products/type/4">锻件</a></li>
                    <li><a href="/products/type/5">对焊件</a></li>
                    <li><a href="/products/type/6">法兰</a></li>
                </ul>
            </li>
            <li><a href="/news">新闻</a></li>
            <li><a href="/info">技术</a></li>
            <li><a href="/latest-project">项目</a></li>
            <li><a href="/download">文件下载</a></li>
        </ul>
    </div>
</template>

<script>
    import $ from "jquery"
    export default {
        methods:{
            showSub(e){
                $(e.target).children("a").addClass("active").next().addClass("active");
            },
            hideSub(e){
                $(e.target).children("a").removeClass("active").next().removeClass("active");
            }
        }
    }

</script>

<style scoped>

</style>