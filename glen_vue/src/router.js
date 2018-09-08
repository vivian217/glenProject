import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound'
import Index from './views/Index'
import AboutUs from './views/AboutUs'
import ContactUs from './views/ContactUs'
import Downloads from './views/Downloads'
import LatestPro from './views/LatestPro'
import EngineerTips from './views/EngineerTips'
import EquipmentQC from './views/EquipmentQC'
import Products from './views/Products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',component: Home,children:[
            {path:'',component:Index},
            {path:'/about-us',component:AboutUs},
            {path:'/contact-us',component:ContactUs},
            {path:'/download',component:Downloads},
            {path:'/latest-project',component:LatestPro},
            {path:'/engineer-tips',component:EngineerTips},
            {path:'/equipment',component:EquipmentQC},
            {path:'/products',component:Products}
    ]},
    { path: '/*', component:NotFound }
  ]
})
