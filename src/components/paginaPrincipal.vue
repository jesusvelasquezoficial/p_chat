<template>
  <div>
    <h1>{{titulo}}</h1><br>
    <small> <router-link to="/">Cerrar Session</router-link></small>
    <div class="">
      <!-- <h1>{{ error }}</h1> -->
      <h1 v-for="msj in json">{{ msj }}</h1>
    </div>
  </div>
</template>

<script>
import api from '../api/login'
export default {
  name: "paginaPrincipal",
  data () {
    return {
      titulo: 'Bienvenido su ingreso fue realizado con EXITO',
      json: [],
      error: ""
    }
  }
}
</script>

<style scoped>

</style>
