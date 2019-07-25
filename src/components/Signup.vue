<template>
  <!-- <div>
    <img src="../assets/logo.png" width="130px">
    <h1>{{titulo}}</h1>
    <form id="app" @submit="Registrarse" method="get">
      <input type="text" name="username" placeholder="Nombre de Usuario" v-model.text="username"><br><br>
      <input type="email" name="email" placeholder="Correo Electronico" v-model.email="email"><br><br>
      <input type="password" name="password" placeholder="Password" v-model.password="password" maxlength="32"><br><br>
      <input type="password" name="password_confirmation" placeholder="Confirmar Password" v-model.password="password_confirmation" maxlength="32"><br><br>
      <input type="submit" value="Registrarse"> -->
      <!-- <button type="button" @click="Registrarse">Registrarse</button><br><br> -->
    <!-- </form><br>
    <small><router-link to="/">Login</router-link></small>
    <h1>{{ error }}</h1> -->
    <!-- <h1 v-for="data in json">{{ data }}</h1> -->
  <!-- </div> -->
  <f7-page name="Signup" no-toolbar no-navbar no-swipeback login-screen>
    <f7-block>
      <img src="../assets/logo.png" width="130px">
    </f7-block>
    <f7-login-screen-title>Registro de Usuario</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="Nombre de Usuario"
        type="text"
        placeholder="Nombre de Usuario"
        :value="username"
        @input="username = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Correo Electronico"
        type="text"
        placeholder="Correo Electronico"
        :value="email"
        @input="email = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Contraseña"
        type="password"
        placeholder="Contraseña"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        label="Confirmar Contraseña"
        type="password"
        placeholder="Confirmar Contraseña"
        :value="password_confirmation"
        @input="password_confirmation = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-block>
      <f7-button @click="Registrarse" color="deeporange" raised fill round>Registrarse</f7-button>
    </f7-block>
    <f7-list>
      <f7-block-footer>¿Ya tienes una cuenta?<br> <f7-link href="/">¡Ingresa!</f7-link>.</f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>
// OJO CON ESTO, DEBERIAS CAMBIAR EL NOMBRE
import api from '../api'

export default {
  data () {
    return {
      name: "Signup",
      titulo: 'Registro de Usuario',
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      json: [],
      error: ""
    }
  },
  methods: {
    Registrarse: function(e){
      // LOGICA PARA REGISTRAR UN USUARIO
      e.preventDefault();
      const self = this

      if (this.validarCampos()) {
        self.error = ""
        if (this.validarEmail()) {
          self.error = ""
          if (this.validateMinLength()) {
            self.error = ""
            if (this.validateConfirmationPassword()) {
              self.error = ""
              api.setDataUser(self.username, self.email, self.password)
              .then(function(data) {
                // console.log(data)
                // console.log(Object.keys(data))
                if(Object.keys(data) != "errors"){
                  self.json = data
                  self.$router.push('/registroExitoso')
                }else{
                  self.error = "El email esta en uso, prueba con otro email"
                }
                // this.$router.push('/')
              }).catch(e => {
                console.log(e);
              })
            }else{
              console.log("El password no coincide")
              self.error = "El password no coincide"
              self.json = []
            }
          }else{
            console.log("El password debe tener min 8 characteres")
            self.error = "El password debe tener min 8 characteres"
            self.json = []
          }
        }else{
          console.log("Email invalido")
          self.error = "Email invalido"
          self.json = []
        }

      }else{
          console.log("Campos vacios")
          self.error = "Campos vacios"
          self.json = []
      }
    },
    validarCampos: function() {
      return (this.username != "" && this.email != "" && this.password != "" && this.password_confirmation != "") ? true : false
    },
    validarEmail: function() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.email)
    },
    validateMinLength(){
      return this.password.trim().length > 7 ? true : false
    },
    validateConfirmationPassword(){
      return (this.password == this.password_confirmation) ? true : false
    }

  }
}
</script>

<style scoped>

</style>
