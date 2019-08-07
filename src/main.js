// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Componentes principales de VUE 
import Vue from 'vue'
import Vuex from 'vuex'

// Componente PRINCIPAL contenedor de Rutas y Store de Datos
import App from './App'

// Axios para peticiones JSON y manejo de API's
import Axios from 'axios'
import VueAxios from 'vue-axios'

// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue from 'framework7-vue/framework7-vue.bundle.min.js'

// Import F7 Style
import Framework7CSS from 'framework7/css/framework7.bundle.min.css'

// Import F7 iOS Icons
// import Framework7Icons from 'framework7-icons/css/framework7-icons.css'
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Usamos los recursos necesarios 
Framework7.use(Framework7Vue)
Framework7.use(Framework7CSS)
Framework7.use(Framework7Icons)
Vue.use(VueAxios, Axios)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App)
})
