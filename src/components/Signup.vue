<template>
  <div>
    <h1>{{titulo}}</h1>
    <input type="text" name="username" placeholder="Nombre de Usuario" v-model="username"><br><br>
    <input type="text" name="email" placeholder="Correo Electronico" v-model="email"><br><br>
    <input type="password" name="password" placeholder="Password" v-model="password"><br><br>
    <input type="password" name="password_confirmation" placeholder="Confirmar Password" v-model="password_confirmation"><br><br>
    <button type="button" @click="Registrarse">Registrarse</button><br><br>
    <div class="">
      <h1>{{ error }}</h1>
      <h1 v-for="msj in json">{{ msj }}</h1>
    </div>
  </div>
</template>

<script>
// OJO CON ESTO, DEBERIAS CAMBIAR EL NOMBRE
import api from '../api/login'

export default {
  name: "Signup",
  data () {
    return {
      titulo: 'Registro de Sesión',
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      json: [],
      error: ""
    }
  },
  methods: {
    Registrarse: function (){
      // LOGICA PARA REGISTRAR UN USUARIO
    },
    validarEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validarCampos: function(username, email, password, password_confirmation) {
      return (username != "" && email != "" && password != "" && password_confirmation != "") ? true : false
    }
  }

}
</script>

<style scoped>

</style>
