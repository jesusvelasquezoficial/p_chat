<template>
  <div>
    <h1>{{bienvenida}}</h1>
    <br>
    <small>
      <router-link to="/">SALIR</router-link>
    </small>
    <!-- <h1>{{ error }}</h1> -->
    <!-- <h1 v-for="data in json">{{ data }}</h1> -->
  </div>
</template>

<script>
// OJO CON ESTO, DEBERIAS CAMBIAR EL NOMBRE
// import api from '../api/login'

export default {
  name: "registroExitoso",
  data () {
    return {
      bienvenida: 'Bienvenido su registro fue realizado con EXITO',

      // json: [],
      // error: ""
    }
  }
}
</script>

<style scoped>

</style>
