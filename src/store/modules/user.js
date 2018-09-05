import * as types from '../types/index'

const state = {
  info: {},
  isLogin: false
}

const mutations = {
  [types.UPDATE_USER_INFO] (state, info) {
    state.info = info
    state.isLogin = true
  }
}

const actions = {
  getUserInfo ({ commit }, data) {
    commit(types.UPDATE_USER_INFO, data)
  }
}

const getters = {
  isLogin: state => state.isLogin,
  userInfo: state => state.info
}

export default {
  getters,
  state,
  mutations,
  actions
}
