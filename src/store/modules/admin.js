/**
 * Created by wangze on 2017/3/26.
 */
import * as types from '../mutation-types'

const state = {
  login: false
}

const mutations = {
  [types.LOGIN_IN] (state) {
    state.login = true
  }
}

export default {
  state,
  mutations
}
