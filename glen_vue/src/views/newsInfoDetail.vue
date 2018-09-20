<template>
    <div>
        <Banner></Banner>
        <section id="section" class="clearfix">
            <div>
                <router-link to="/">主页</router-link>
                <span v-if="iid==undefined">&gt;&nbsp;新闻</span>
                <span v-if="nid==undefined">&gt;&nbsp;技术</span>
            </div>
            <div>
                <SubNav1></SubNav1>
                <Contact></Contact>
            </div>
            <div class="main">
                <h4 class="sec_bg p-3">{{list.title}}</h4>
                <h5 class="text-center">- {{list.date | dateFilter}}-</h5>
                <div class="detail" v-html="list.detail"></div>
                <div class="px-3 prevNext" v-if="iid==undefined">
                    <p class="mb-0">上一个：<span v-if="nid==1">空</span><a :href="'/news/detail/'+list.prevId" v-else>{{list.prevTitle}}</a></p>
                    <p>下一个：<a :href="'/news/detail/'+list.nextId">{{list.nextTitle}}</a></p>
                </div>
                <div class="px-3 prevNext" v-if="nid==undefined">
                    <p class="mb-0">上一个：<span v-if="nid==1">空</span><a :href="'/info/detail/'+list.prevId" v-else>{{list.prevTitle}}</a></p>
                    <p>下一个：<a :href="'/info/detail/'+list.nextId">{{list.nextTitle}}</a></p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Banner from '@/components/banner.vue'
    import SubNav1 from '@/components/subnav1.vue'
    import Contact from '@/components/subContact.vue'
    export default {
        components:{
            Banner,
            SubNav1,
            Contact
        },
        data(){
            return{
                list:{},
                nid:this.$route.params.nid,
                iid:this.$route.params.iid
            }
        },
        mounted(){
            if(this.nid){
                this.loadNews();
            }
            if(this.iid){
                this.loadInfo();
            }
        },
        methods:{
            loadNews(){
                this.$axios.get("http://localhost:6060/news/detail?id="+this.nid).then(res=>{
                    this.list=res.data[0];
                })
            },
            loadInfo(){
                this.$axios.get("http://localhost:6060/info/detail?id="+this.iid).then(res=>{
                    this.list=res.data[0];
                })
            }
        }
    }
</script>

<style scoped>
    .main>h4:nth-of-type(1){
        color: #555;
    }
    .main>h4+h5{
        color: #999;
    }
    .main>.detail>p{
        color: #666;
    }
    .main>.detail>p>a,.main>.prevNext{
        color: #333;
    }
    .main>.prevNext a{
        color: #777;
    }
</style>