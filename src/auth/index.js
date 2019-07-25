// API
const PROTOCOLO = 'https://'
const PORT = ":4001"
const URL = '192.168.8.107'+PORT
const LOGIN_URL = PROTOCOLO+URL+"/api/login"

export default {
  user:{
    id: Number.parseInt(window.localStorage.getItem('id_token')),
    name: window.localStorage.getItem('v_username'),
    email: window.localStorage.getItem('v_email'),
    authenticated: !!window.localStorage.getItem('id_token')
  },

  login (context, creds, redirect) {
    return context.axios.post(LOGIN_URL, creds)
  },

  signOut(context){
    window.localStorage.removeItem('id_token')
    window.localStorage.removeItem('v_username')
    window.localStorage.removeItem('v_email')
    window.localStorage.removeItem('token')
    // context.dispatch('USER_SIGNED_OUT')
    window.userToken = null
    context.router.navigate('/')
  }
}
