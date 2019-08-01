// API
// const { SCHEME, HOSTNAME } =
//   process.env.NODE_ENV == 'production'
//     ? { SCHEME: 'http', HOSTNAME: window.location.hostname+":4000" }
//     : { SCHEME: 'http', HOSTNAME: 'localhost:4000' }
const PROTOCOLO = 'https://'
const PORT = ":4001"
const URL = '10.0.1.7'+PORT
// const URL = '192.168.8.107'+PORT
const LOGIN_URL = PROTOCOLO+URL+"/api/login"
const SIGNIN_URL = PROTOCOLO+URL+"/api/signin"

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

  signin(context, creds, redirect){
    return context.axios.post(SIGNIN_URL, creds)
  },

  signOut(context){
    window.localStorage.removeItem('id_token')
    window.localStorage.removeItem('v_username')
    window.localStorage.removeItem('v_email')
    window.localStorage.removeItem('token')
    // context.dispatch('USER_SIGNED_OUT')
    window.userToken = null
    location.reload()
    // context.router.navigate('/')
  }
}
