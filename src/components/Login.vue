<template>
  <div>
    <h1>{{titulo}}</h1>
    <input type="text" name="email" placeholder="Correo Electronico" v-model="email"><br><br>
    <input type="password" name="password" placeholder="Password" v-model="password"><br><br>
    <button type="button" name="btnIngresar" @click="Ingresar">Ingresar</button><br><br>
    <small> <router-link to="/signup">Registrarse</router-link></small>
    <div class="">
      <h1>{{ error }}</h1>
      <h1 v-for="msj in json">{{ msj }}</h1>
    </div>
  </div>
</template>

<script>
import api from '../api/login'
export default {
  name: "Login",
  data () {
    return {
      titulo: 'Inicio de Sesión',
      email: "",
      password: "",
      json: [],
      error: ""
    }
  },
  methods: {
    Ingresar: function (){
      const self = this
      console.log(self.email)
      console.log(self.password)
      if (this.validarCampos(self.email, self.password)) {
        if (this.validarEmail()) {
            self.error = ""
            api.getDataSesion(self.email, self.password)
            .then(function(dataJson) {
              self.json = dataJson
            }).catch(e => {
              console.log(e);
            })
        }else{
          self.error = "Email invalido"
          self.json = []
        }
      }else{
        self.error = "Campos vacios"
        self.json = []
      }
    },
    validarCampos: function() {
      return (this.email != "" && this.password != "") ? true : false
    },
    validarEmail: function() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(this.email)
    }
  }

}
</script>

<style scoped>

</style>
