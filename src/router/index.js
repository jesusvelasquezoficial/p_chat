import Vue from 'vue'
import Router from 'vue-router'

// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle'

// Import F7-Vue Plugin Bundle (with all F7 components registered)
import Framework7Vue from 'framework7-vue/framework7-vue.bundle.min.js'

// Import F7 Style
import Framework7CSS from 'framework7/css/framework7.bundle.min.css';

// Import F7 iOS Icons
// import Framework7Icons from 'framework7-icons/css/framework7-icons.css';

// import { f7App , f7Navbar, f7Statusbar, f7Panel, f7View, f7Popup, f7Block, f7Row, f7Col, f7Button } from 'framework7-vue';
// COMPONENTES PERSONALES
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import paginaPrincipal from '@/components/paginaPrincipal'
import Signup from '@/components/Signup'
import registroExitoso from '@/components/registroExitoso'
import chat from '@/components/chat'

//
// Vue.component('f7-app', f7App);
// Vue.component('f7-navbar', f7Navbar);
// Vue.component('f7-statusbar', f7Statusbar);
// Vue.component('f7-panel', f7Panel);
// Vue.component('f7-view', f7View);
// // Vue.component('f7-pooup', f7Popup);
// // Vue.component('f7-block', f7Block);
// // Vue.component('f7-row', f7Row);
// // Vue.component('f7-col', f7Col);
// // Vue.component('f7-button', f7Button);
// Init plugin
Vue.component('Login', Login);
Framework7.use(Framework7Vue)

// Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/registroExitoso',
      name: 'registroExitoso',
      component: registroExitoso
    },
    {
      path: '/paginaPrincipal',
      name: 'paginaPrincipal',
      component: paginaPrincipal
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    }

  ]
})
