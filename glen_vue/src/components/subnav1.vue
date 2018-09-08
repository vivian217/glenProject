<template>
    <div>
        <h3>产品分类</h3>
        <ul>
            <li><a href="#">管轴</a></li>
            <li><a href="#">焊接覆盖层</a></li>
            <li><a href="#">订制法兰管件</a></li>
            <li><a href="#">锻件</a></li>
            <li>
                <a href="#">焊接管件</a>
                <ul>
                    <li><a href="#">对焊弯头</a></li>
                    <li><a href="#">对焊三通</a></li>
                    <li><a href="#">管帽</a></li>
                    <li><a href="#">对焊大小头</a></li>
                    <li><a href="#">对焊管端</a></li>
                </ul>
            </li>
            <li>
                <a href="#">法兰</a>
                <ul>
                    <li><a href="#">ANSI B16.5 法兰 (ASME, ASA)</a></li>
                    <li><a href="#">ANSI B16.47 法兰</a></li>
                    <li><a href="#">DIN 法兰 PN6-PN40( DIN 法兰)</a></li>
                    <li><a href="#">EN 1092-1 法兰 PN6-PN63</a></li>
                    <li><a href="#">JIS B 2220 法兰</a></li>
                    <li><a href="#">BS 4504 法兰 PN6-PN64</a></li>
                    <li><a href="#">GOST (ГОСТ) 12820-80 法兰</a></li>
                    <li><a href="#">SABS SANS 1123 法兰</a></li>
                    <li><a href="#">法兰材料</a></li>
                </ul>
            </li>
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
    })
    $sec_list.on("mouseenter", "li,a", function () {
        $(this).addClass("sec_bg");
    })
    $sec_list.on("mouseleave", "li,a", function () {
        $(this).removeClass("sec_bg");
    })
</script>

<style scoped>

</style>