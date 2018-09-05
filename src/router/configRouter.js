/**
 * 路由配置文件, 装载路由并且加入登录控制
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

export default function (routers, routerConfig) {
  const router = new VueRouter(Object.assign({}, {
    routes: routers,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }, routerConfig))

  router.beforeEach((to, from, next) => {
    store.dispatch('showLoading')

    if (to.matched.some(record => record.meta.passAuth)) {
      next()
    } else {
      if (store.getters.isLogin) {
        next()
      } else {
        store.dispatch('getUserInfo').then(() => {
          next()
        })
      }
    }
  })
  router.afterEach(() => {
    store.dispatch('hideLoading')
  })

  return router
}
