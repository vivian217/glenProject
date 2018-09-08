<template>
    <div>
        <h3>关于我们</h3>
        <ul>
            <li>
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
    }
    var $sec_list=$("div>ul>li>ul");
    $sec_list.parent().hover(function(){
        $(this).children("a").addClass("active")
            .next().addClass("active");
    },function(){
        $(this).children("a").removeClass("active")
            .next().removeClass("active");
    });
    $sec_list.on("mouseenter", "li,a", function () {
        $(this).addClass("sec_bg");
    });
    $sec_list.on("mouseleave", "li,a", function () {
        $(this).removeClass("sec_bg");
    })

</script>

<style scoped>

</style>