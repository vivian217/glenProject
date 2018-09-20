import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound'
import Index from './views/Index'
import AboutUs from './views/AboutUs'
import ContactUs from './views/ContactUs'
import Downloads from './views/Downloads'
import LatestPro from './views/LatestPro'
import Info from './views/Info'
import News from './views/News'
import Products from './views/Products'
import ProductDetail from './views/ProductDetail'
import NewsInfoDetail from './views/newsInfoDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',component: Home,children:[
            {path:'',component:Index},
            {path:'about-us',component:AboutUs},
            {path:'contact-us',component:ContactUs},
            {path:'download',component:Downloads},
            {path:'latest-project',component:LatestPro},
            {path:'info',component:Info},
            {path:'news',component:News},
            {path:'products',component:Products},
            {path:'products/type/:fid',component:Products, props:true},
            {path:'products/search/:kw',component:Products, props:true},
            {path:'products/detail/:pid',component:ProductDetail, props:true},
            {path:'news/detail/:nid',component:NewsInfoDetail},
            {path:'info/detail/:iid',component:NewsInfoDetail},
    ]},
    { path: '/*', component:NotFound }
  ],
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else {
          return {x: 0, y: 0}
      }
  }
})
