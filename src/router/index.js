// import Vue from 'vue'
// import Router from 'vue-router'

// COMPONENTES PERSONALES
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import paginaPrincipal from '@/components/paginaPrincipal'
import Signup from '@/components/Signup'
import registroExitoso from '@/components/registroExitoso'
import chat from '@/components/chat'
import buscarContactos from '@/components/buscarContactos'

import auth from '../auth'

// GUARDIANES AUTHENTICATION
const requireAuth = (routeTo, routeFrom, resolve, reject) => {
  if (!auth.user.authenticated) {
    resolve({ component: Login })
  } else {
    resolve({ component: paginaPrincipal })
  }
}

// (to, _from, next) => {
//   console.log(auth.user.authenticated);
//   if (!auth.user.authenticated) {
//     next('/Login')
//   } else {
//     next()
//   }
// }

const afterAuth = (_to, from, next) => {
  if (auth.user.authenticated) {
    next(from.path)
  } else {
    next()
  }
}

// Array routes
export default [
  {
    path: '/Helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/Login',
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
    path: '/',
    name: 'paginaPrincipal',
    async: requireAuth
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat
  },
  {
    path: '/buscarContactos',
    name: 'buscarContactos',
    component: buscarContactos
  }
  
]