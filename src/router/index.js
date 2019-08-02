// Componentes Personales
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import paginaPrincipal from '@/components/paginaPrincipal'
import Signup from '@/components/Signup'
import registroExitoso from '@/components/registroExitoso'
import chat from '@/components/chat'
import buscarContactos from '@/components/buscarContactos'

// Autenticacion
import auth from '../auth'

// Guardianes de Autenticacion
const requireAuth = (routeTo, routeFrom, resolve, reject) => {
  if (!auth.user.authenticated) {
    resolve({ component: Login })
  } else {
    resolve({ component: paginaPrincipal })
  }
}

// Array Rutas
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