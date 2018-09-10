<template>
    <div>
        <h3>关于我们</h3>
        <ul>
            <li @mouseenter="showSub" @mouseleave="hideSub">
                <a href="#">产品</a>
                <ul>
                    <li><a href="#">管段</a></li>
                    <li><a href="#">堆焊</a></li>
                    <li><a href="#">订制管件</a></li>
                    <li><a href="#">锻件</a></li>
                    <li><a href="#">对焊件</a></li>
                    <li><a href="#">法兰</a></li>
                </ul>
            </li>
            <li><a href="#">质检</a></li>
            <li><a href="#">工程</a></li>
            <li><a href="#">项目</a></li>
            <li><a href="#">文件下载</a></li>
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