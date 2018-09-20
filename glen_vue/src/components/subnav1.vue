<template>
    <div>
        <h3>产品分类</h3>
        <ul>
            <li><a href="/products/type/1">管轴</a></li>
            <li><a href="/products/type/2">焊接覆盖层</a></li>
            <li><a href="/products/type/3">订制法兰管件</a></li>
            <li><a href="/products/type/4">锻件</a></li>
            <li @mouseenter="showSub" @mouseleave="hideSub">
                <a href="/products/type/5">焊接管件</a>
                <ul>
                    <li><a href="/products/detail/7">双相钢弯头</a></li>
                    <li><a href="/products/detail/10">大尺寸对焊件</a></li>
                    <li><a href="/products/detail/13">不锈钢对焊弯头</a></li>
                    <li><a href="/products/detail/15">合金钢对焊弯头</a></li>
                    <li><a href="/products/detail/21">铜镍对焊弯头</a></li>
                </ul>
            </li>
            <li @mouseenter="showSub" @mouseleave="hideSub">
                <a href="/products/type/6">法兰</a>
                <ul>
                    <li><a href="/products/detail/6">ASME B16.47法兰</a></li>
                    <li><a href="/products/detail/14">钛合金板法兰</a></li>
                    <li><a href="/products/detail/16">合金钢套接字焊</a></li>
                    <li><a href="/products/detail/17">铜镍90/10盲板法兰</a></li>
                    <li><a href="/products/detail/18">ASTM ASME不锈钢管法兰和管件</a></li>
                    <li><a href="/products/detail/19">BS4504 10/3盲锻造合金钢法兰</a></li>
                </ul>
            </li>
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