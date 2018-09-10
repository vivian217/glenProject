<template>
    <div id="products">
        <div class="my_title">
            <h3>主要产品</h3>
            <span></span>
        </div>
        <div class="row m-0">
            <div class="col-lg-3 col-sm-6 p-0 mt-1" v-for="(item,i) in products" v-if="i<4" :key="item.id">
                <img :src="item.img" alt=""/>
                <div class="cover position-absolute">
                    <div class="coverText p-2">
                        <h3 v-cloak>{{item.title}}</h3>
                        <p class="py-lg-3 py-sm-1" v-cloak>{{item.details}}</p>
                        <a href="#" class="btn bg-white">更多详情</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-0">
            <div class="col-lg-3 col-sm-6 p-0 mt-1" v-for="(item,i) in products" v-if="i>=4" :key="item.id">
                <img :src="item.img" alt=""/>
                <div class="cover position-absolute">
                    <div class="coverText p-2">
                        <h3 v-cloak>{{item.title}}</h3>
                        <p class="py-lg-3 py-sm-1" v-cloak>{{item.details}}</p>
                        <a href="#" class="btn bg-white">更多详情</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                products:[]
            }
        },
        created(){this.getProducts()},
        methods:{
            getProducts(){
                this.$ajax.get("http://localhost:6060/index/products").then(res=>{
                    if(res.data.code==1){
                        this.products=res.data.msg;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>