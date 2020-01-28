import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入api目录下的index.js
import api from './api/'
//再将api挂载到vue的原型上就可以使用了
Vue.prototype.$api = api

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router,
  store, //挂载到实例上
  components: { App },
  template: '<App/>'
})
