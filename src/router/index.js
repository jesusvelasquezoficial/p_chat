import Vue from 'vue'
import Router from 'vue-router'
// COMPONENTES PERSONALES
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import paginaPrincipal from '@/components/paginaPrincipal'
import Signup from '@/components/Signup'
import registroExitoso from '@/components/registroExitoso'
import chat from '@/components/chat'

Vue.use(Router)

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
