<template>
  <div>
    <div heigth="100px" class="nav">
      <table width="100%">
        <tr>
          <td style="text-align:left">
            <img src="../assets/logo-phoenix.png" width="130px">
          </td>
          <td  style="text-align:right;">
            <!-- CAMPO DE NOMBRE DE CONTACTO A BUSCAR -->
            <input type="text" name="" v-model="nombreContato" placeholder="Nombre de Contacto" width="auto">
            <a @click="buscarContacto" class="menu" style="border: solid 1px white;">Buscar</a>
            <!-- <a href="#" class="menu">{{username}}</a> -->
          </td>
        </tr>
      </table>
    </div><br>
    <!-- <h1>{{titulo}}</h1><br> -->
    <div class="conversacion">
      <table style="width:100%;text-align:left;">
        <tr style="margin:20px" v-show="contacto.mostrar">
          <td>
            <img src="../assets/profiles/avatar-1.jpg" width="50px" class="img">
          </td>
          <a href="#" class="btnConversacion">
          <td>
            <i><b>{{contacto.nombre}}</b></i> <br>
            <small>{{contacto.email}}</small>
          </td>
          <td style="vertical-align:middle; margin-top:5px;float:right;">
            <router-link to="/chat" style="border: solid 1px black;text-decoration:none;padding:7px;color:black;">Chatear</router-link>
          </td>
        </a>
        <hr>
        </tr>
        <tr style="margin:20px">
          <td>
            <img src="../assets/profiles/avatar-1.jpg" width="50px" class="img">
          </td>
          <a href="#" class="btnConversacion">
          <td>
              <i><b>Jairo Moncada</b></i> <br>
              <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. •</small>
          </td>
        </a>
        <hr>
        </tr>
        <tr>
          <td >
            <img src="../assets/profiles/avatar-2.jpg" width="50px" class="img">
          </td>
          <a href="#" class="btnConversacion">
          <td>
            <i><b>Fernando Agreda</b></i> <br>
            <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. •</small>
          </td>
        </a>
        <hr>
        </tr>
        <tr>
          <td>
            <img src="../assets/profiles/avatar-6.jpg" width="50px" class="img">
          </td>
          <a href="#" class="btnConversacion">
          <td>
              <i><b>Jesus Velasquez</b></i> <br>
              <small> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. •</small>
          </td>
        </a>
          <hr>
        </tr>
      </table>
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
  name: "paginaPrincipal",
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
  .nav{
    background: black;
    color: white;
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
