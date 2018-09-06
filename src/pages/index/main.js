import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index/index'
import store from '@/store/index'
import 'amfe-flexible'
import 'fastclick'

// // 引用公用组件
import { NavBar, Tabbar, TabbarItem, Button, AddressEdit, Toast } from 'vant'

[NavBar, Tabbar, TabbarItem, Button, AddressEdit, Toast].forEach(item => Vue.use(item))

import('@/styles/index.less')

// import Vant from 'vant';
// import 'vant/lib/vant-css/index.css';

// Vue.use(Vant);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
