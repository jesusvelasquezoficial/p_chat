<template>
  <!-- <div>
    <img src="../assets/logo.png" width="130px">
    <h1>{{titulo}}</h1>
    <input type="text" name="email" placeholder="Correo Electronico" v-model="email"><br><br>
    <input type="password" name="password" placeholder="Password" v-model="password"><br><br>
    <button type="button" name="btnIngresar" @click="Ingresar">Ingresar</button><br><br>
    <small> <router-link to="/signup">Registrarse</router-link></small>
    <div class="">
      <h1>{{ error }}</h1>
      <h1 v-for="msj in json">{{ msj }}</h1>
    </div>
  </div> -->
  <f7-page name="Login" no-toolbar no-navbar no-swipeback login-screen>
    <f7-block>
      <img src="../assets/logo.png" width="130px">
    </f7-block>
    <f7-login-screen-title>Inicio de Sesión</f7-login-screen-title>
    <f7-list form>
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
    </f7-list>
    <f7-block>
      <f7-button @click="Ingresar" color="deeporange" raised fill round>Ingresar</f7-button>
    </f7-block>
    <f7-list>
      <f7-block-footer>¿Aun no tienes cuenta?<br> <f7-link href="/signup/">¡Registrarte!</f7-link>.</f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>
import api from '../api'
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
      if (this.validarCampos()) {
        self.error = ""
        if (this.validarEmail()) {
            self.error = ""
            api.getDataSesion(self.email, self.password)
            .then(function(data) {
              console.log(data);
              console.log(Object.keys(data))
              if(Object.keys(data) != "errors"){
                // Devolvemos los datos OJO
                self.json = data.data
                self.$router.push('/paginaPrincipal')
              }else{
                self.error = data.errors
                // self.error = "Usted no esta registrador por favor registrese"
              }
            }).catch(errors => {
              self.error = "Usted no esta registrador"
              self.error = errors

              console.log(errors)
              console.log(Object.keys(errors))
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
