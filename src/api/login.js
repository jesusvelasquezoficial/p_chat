// PROTOCOLO
const PROTOCOLO = 'http://'
// PUERTO
const PORT = ":4000"
// Arquimedes IP
const URL = '10.0.1.13'+PORT
// HUAWEI-B310 IP
// const URL = '192.168.8.101'+PORT

export default {

  // API PARA INICIAR SESION
  getDataSesion(email, password){
    const url = PROTOCOLO+URL+"/api/users/:email/:password"

    const remplazoEmail =  url.replace(':email', email)
    const ruta = remplazoEmail.replace(':password', password)

    return fetch(ruta)
      .then(res => res.json())
      .then(json => json)
  },
  // API PARA REGISTRO DE USUARIO
  setDataUser(username, email, password){
    const userParams = {username: username, email: email, password: password}
    const url = PROTOCOLO+URL+"/api/signup/"

    return fetch(url,  {
      method: 'post', // or 'PUT'
      body: JSON.stringify(userParams), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(e =>{
      console.log(e)
    })
    .then(json => json)
  }
}
