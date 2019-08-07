import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// const store = new Vuex.Store({
//   state: {
//     currentUser: null,
//     count: 0
//   },
//   getters: {
//     getCurrentUser: (state) => {
//       return state.currentUser
//     }
//   },
//   mutations: {
//     increment(state) {
//       state.count++
//     }
//   }
// })

const store = new Vuex.Store({
  state: {
    user:{
      id: Number.parseInt(window.localStorage.getItem('id_token')),
      name: window.localStorage.getItem('v_username'),
      email: window.localStorage.getItem('v_email'),
      authenticated: !!window.localStorage.getItem('id_token')
    },
    currentUser: null,
    count: 0

  },
  getters: {},
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {},
  modules: {}

})

export default store
