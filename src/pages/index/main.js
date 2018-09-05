import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index/index'
import store from '@/store/index'
import 'amfe-flexible'

// // 引用公用组件
import { NavBar, Tabbar, TabbarItem, Button } from 'vant'

[NavBar, Tabbar, TabbarItem, Button].forEach(item => Vue.use(item))

// 引入基础样式
import 'vant/packages/vant-css/src/base.css'

// 引入组件对应的样式
import 'vant/packages/vant-css/src/button.css'
import 'vant/packages/vant-css/src/checkbox.css'

// import Vant from 'vant';
// import 'vant/lib/vant-css/index.css';

// Vue.use(Vant);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
