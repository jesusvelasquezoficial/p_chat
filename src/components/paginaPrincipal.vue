<template>
  <div>
    <f7-page>
      <f7-navbar title="Chats">
        <f7-nav-right>
          <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search" icon-aurora="f7:search" icon-md="f7:search"></f7-link>
          <f7-link  href="/buscarContactos/" icon-f7="person"></f7-link>
        </f7-nav-right>
        <f7-searchbar
          class="searchbar-demo"
          expandable
          search-container=".search-list"
          search-in=".item-title"
        ></f7-searchbar>
      </f7-navbar>
      <f7-list class="searchbar-not-found" media-list>
        <f7-list-item title="No existe"></f7-list-item>
      </f7-list>
      <f7-list class="search-list searchbar-found no-margin-top text-align-left">
        <f7-list-item link="/chat" title="Jesus Velasquez" footer="esto es un mensaje de prueba." badge="5">
          <f7-icon slot="media" f7="images"></f7-icon>
        </f7-list-item>
        <f7-list-item link="/chat" title="Fernando Agreda" footer="esto es un mensaje de prueba." badge="5">
          <f7-icon slot="media" f7="images"></f7-icon>
        </f7-list-item>
        <f7-list-item link="/chat" title="Jairo Moncada" footer="esto es un mensaje de prueba." badge="5">
          <f7-icon slot="media" f7="images"></f7-icon>
        </f7-list-item>
      </f7-list>
      <f7-list>
        <f7-link @click="Salir" fill text-color="red" class="item-divider">Cerrar Sesión</f7-link>
      </f7-list>
      <!-- <f7-list class="text-align-center">
        <f7-list-item title="Salir" text-color="red"></f7-list-item>
      </f7-list> -->
      <!-- <f7-fab position="right-bottom" slot="fixed" color="orange" href="/chat/">
        <f7-icon ios="f7:add" aurora="f7:add" md="f7:add"></f7-icon> -->
        <!-- <f7-icon ios="f7:close" aurora="f7:close" md="f7:close"></f7-icon> -->
      <!-- </f7-fab> -->
    </f7-page>
    <!-- <small> <router-link to="/">Cerrar Session</router-link></small> -->
    <div class="">
      <h1>{{ error }}</h1>
      <h1 v-for="msj in json">{{ msj }}</h1>
    </div>
  </div>
</template>

<script>
import api from '../api'
import auth from '../auth'
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
    },
    Salir: () => {
      auth.signOut(this)
      location.reload()
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
