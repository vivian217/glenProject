<template>
        <div id="carousel" class="carousel position-relative" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(item,i) in carousel" :class="i==0?'active':''" :key="item.id"><img :src="item.src" alt=""/></div>
            </div>
            <a href="#carousel" class="carousel-control-prev" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a href="#carousel" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
            <!--搜索框-->
                <div class="position-absolute my_search">
                    <input type="text" class="h-100 w-75 border-0 bg-transparent text-white" v-model="kw" @focus="inp_focus" @blur="inp_blur" @keyup.13="search"/>
                    <button class="border-0 h-100 position-absolute" @click="search"></button>
                </div>
        </div>
</template>

<script>
    export default {
        data(){
            return{
                carousel:[],
                kw:"请输入搜索产品..."
            }
        },
        created(){
            this.getCarousel()
        },
        methods:{
            getCarousel(){
                this.$axios.get("http://localhost:6060/index").then(res=>{
                    if(res.data.code==1){
                        this.carousel=res.data.msg;
                    }
                })
            },
            inp_focus(){
                if(this.kw=="请输入搜索产品...")this.kw="";
            },
            inp_blur(){
                if(this.kw=="")this.kw="请输入搜索产品...";
            },
            search(){
                if(this.kw!="请输入搜索产品..." && this.kw.trim()!=""){
                    this.$router.push("/products/search/"+this.kw);
                }
            }
        }
    }
</script>

<style scoped>

</style>