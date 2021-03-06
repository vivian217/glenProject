import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "jquery"
import "popper.js"
import "bootstrap"
import "@/assets/css/bootstrap.css"
import "@/assets/css/base.css"

axios.defaults.withCredentials=true;
Vue.prototype.$axios=axios;
Vue.config.productionTip = false;

Vue.filter("dateFilter",function(val){
    var date=new Date(val);
    var y=date.getFullYear();
    var m=date.getMonth()+1;
    m<10&&(m="0"+m);
    var d=date.getDate();
    d<10&&(d="0"+d);
    return `${y}-${m}-${d}`;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
