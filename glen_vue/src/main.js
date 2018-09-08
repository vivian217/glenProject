import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "jquery"
import "popper.js"
import "bootstrap"
import "@/assets/css/bootstrap.css"
import "@/assets/css/base.css"
import axios from 'axios'

axios.defaults.withCredentials=true;
Vue.prototype.$axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
