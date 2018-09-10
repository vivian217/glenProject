<template>
    <div id="hot_products">
        <div class="my_title">
            <h3>热门产品</h3>
            <span></span>
        </div>
        <div class="my_width_xl">
            <div class="row">
                <div class="col-md-3 col-sm-6 p-2" v-for="item in hotPro" :key="item.id">
                    <div class="card border-0">
                        <a href="#"><img :src="item.img" alt=""/></a>
                        <div class="card-body text-center">
                            <a href="#" class="text-secondary" v-cloak>{{item.title}}</a>
                        </div>
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
                hotPro:[]
            }
        },
        created(){this.getHotPro()},
        methods:{
            getHotPro(){
                this.$ajax.get("http://localhost:6060/index/hotPro").then(res=>{
                    if(res.data.code==1){
                        this.hotPro=res.data.msg;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>