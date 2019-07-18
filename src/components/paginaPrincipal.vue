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
        <tr style="margin:20px">
          <td>
            <img src="../assets/profiles/avatar-1.jpg" width="50px" class="img">
          </td>
          <a href="#" class="btnConversacion">
          <td>
            <i><b>Pepe Perez</b></i> <br>
            <small> Estado del Usuario </small>
          </td>
          <td style="vertical-align:middle; margin-top:5px;float:right;">
            <a @click="" style="border: solid 1px black;text-decoration:none;padding:7px;color:black;">Agregar</a>
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
      json: [],
      error: ""
    }
  },
  methods:{
    buscarContacto:function() {
      const self = this
      api.getContacto(self.nombreContato)
      .then(function(data) {
        console.log(data);
      }).catch(errors => {
        self.error = "El contacto no existe"
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
