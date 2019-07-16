// PROTOCOLO
const PROTOCOLO = 'https://'
// PUERTO
const PORT = ":4001"
// Arquimedes IP
const URL = '10.0.1.9'+PORT
// HUAWEI-B310 IP
// const URL = '192.168.8.107'+PORT

export default {

  // API PARA INICIAR SESION
  getDataSesion(email, password){
    const sessionParams = email+'/'+password
    const url = PROTOCOLO+URL+"/api/login/:sessionParams"
    const ruta =  url.replace(':sessionParams', sessionParams)
    // console.log(ruta)
    // ESPERAMOS UNA RESPUESTAS JSON
    return fetch(ruta)
      .then(res => res.json())
      .then(json => json)
      .catch(e => e )
  },
  // API PARA REGISTRO DE USUARIO
  setDataUser(username, email, password){
    // const userParams = {username: username, email: email, password: password}
    const userParams = username+'/'+email+'/'+password
    const url = PROTOCOLO+URL+"/api/signup/:userParams"
    const ruta = url.replace(':userParams', userParams)
    return fetch(ruta)
    .then(res => res.json())
    .then(json => json)
    .catch(e => e )
  }
}
