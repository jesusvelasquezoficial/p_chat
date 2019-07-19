<template>
  <div>
    <div height="100px" class="nav">
      <table>
        <tr>
          <td style="text-align:left">
            <img src="../assets/profiles/avatar-6.jpg" class="img" style="margin-right:10px">
          </td>
          <td style="text-align:left;">
            <i><b>Pepe Perez</b></i> <br>
            <small>pepe@gmail.com</small>
          </td>
        </tr>
      </table>
    </div><br>
    <!-- <h1>{{titulo}}</h1><br> -->
    <div class="conversacion">
      <table style="width:100%;text-align:left;">
        <tr style="margin:20px">
          <td>
            <img src="../assets/profiles/avatar-1.jpg" width="50px" class="img">
          </td>
          <td>
              <i><b>Pepe Perez</b></i> <br>
              <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</small>
          </td>
          <hr>
        </tr>
        <tr style="margin:20px">
          <td>
            <img src="../assets/profiles/avatar-6.jpg" width="50px" class="img">
          </td>
          <td>
              <i><b>Jesus Velasquez</b></i> <br>
              <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</small>
          </td>
          <hr>
        </tr>

      </table>
    </div>
    <div width="100%">
      <input type="text" name="" value="">
      <button type="button" name="button">Enviar</button>
    </div>
    <small> <router-link to="/">Cerrar Session</router-link></small>
    <div class="">
      <h1>{{ error }}</h1>
      <h1 v-for="msj in json">{{ msj }}</h1>
    </div>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: "chat",
  data () {
    return {
      titulo: 'Bienvenido su ingreso fue realizado con EXITO',
      username: "Nombre Apellido",
      nombreContato: '',
      contacto: {
          id: '',
          email: '',
          nombre: '',
          mostrar: false
      },
      json: [],
      error: ""
    }
  },
  methods:{
    buscarContacto:function() {
      const self = this
      api.getContacto(self.nombreContato)
      .then(function(data) {
        if(Object.keys(data) != "errors"){
          console.log(data)
          self.contacto.id = data.data.id
          self.contacto.email = data.data.email
          self.contacto.nombre = data.data.username
          self.contacto.mostrar = true
        }else{
          self.contacto.mostrar = false
          // self.error = data.errors
          self.error = "Usuario no encontrado"
        }
      }).catch(errors => {
        self.contacto.mostrar = false
        console.log(errors)
        self.error = "Usuario no encontrado"
        // self.error = errors

      })
    }
  }

}
</script>

<style scoped>
.conversacion{
  height:755px;
}
  .nav{
    background: black;
    color: white;
    padding: 3PX;
  }
  .img{
    border-radius: 200px;
    vertical-align: middle;
    width: 50px;
  }
  .menu{
    padding: 10px;
    text-decoration: none;
    color: white;
    margin: 0px 20px;
  }
  .btnConversacion{
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
</style>
