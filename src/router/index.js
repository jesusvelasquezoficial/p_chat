// import Vue from 'vue'
// import Router from 'vue-router'

// COMPONENTES PERSONALES
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import paginaPrincipal from '@/components/paginaPrincipal'
import Signup from '@/components/Signup'
import registroExitoso from '@/components/registroExitoso'
import chat from '@/components/chat'

import auth from '../auth'

// GUARDIANES AUTHENTICATION
const requireAuth = (routeTo, routeFrom, resolve, reject) => {
    console.log(auth.user.authenticated);
  if (true) {
    resolve({url: '/Login/'});
  } else {
    // don't allow to visit this page for unauthenticated users
    reject();
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
      component: Login,
      beforeEnter: afterAuth
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
      component: paginaPrincipal,
      beforeEnter: requireAuth,
      // on: {
      //   pageBeforeIn: requireAuth
      // }
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    }
  ]
