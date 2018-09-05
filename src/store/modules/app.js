import * as types from '../types/index'

const state = {
  isLoading: false,
  loadingText: '加载中'
}

const mutations = {
  [types.APP_UPDATE_LOADING] (state, { isLoading, loadingText }) {
    state.isLoading = isLoading
    state.loadingText = loadingText
  }
}

const actions = {
  updateLoading ({ commit }, data) {
    commit(types.APP_UPDATE_LOADING, data)
  },
  showLoading ({ commit }) {
    commit(types.APP_UPDATE_LOADING, { isLoading: true })
  },
  hideLoading ({ commit }) {
    commit(types.APP_UPDATE_LOADING, { isLoading: false })
  }
}

export default {
  state,
  mutations,
  actions
}
