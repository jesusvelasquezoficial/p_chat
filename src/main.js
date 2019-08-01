// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

// Axios 
import Axios from 'axios'
import VueAxios from 'vue-axios'

// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue from 'framework7-vue/framework7-vue.bundle.min.js'
// import { f7App , f7Navbar, f7Statusbar, f7Panel, f7View, f7Popup, f7Block, f7Row, f7Col, f7Button } from 'framework7-vue';

// Import F7 Style
import Framework7CSS from 'framework7/css/framework7.bundle.min.css'

// Import F7 iOS Icons
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Init plugin
Framework7.use(Framework7Vue, Framework7CSS, Framework7Icons)

Vue.use(VueAxios, Axios)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App)
})
