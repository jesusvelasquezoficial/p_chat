const PROTOCOLO = 'https'
// Arquimedes
const URL = '10.0.1.13'
// HUAWEI-B310
// const URL = '192.168.8.101'
const PORT = "4001"

export default {
  getDataSesion(email, password){
    const url = PROTOCOLO+":/api/"+URL+":"+PORT+"/users/"

    const remplazoEmail =  url.replace(':email', email)
    const ruta = remplazoEmail.replace(':password', password)

    return fetch(ruta)
      .then(res => res.json())
      .then(json => json)
  },
  setDataSesion(username, email, password, password_confirmation){

  }
}
