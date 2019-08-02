<template>
  <!-- Elemento ruta de App -->
  <div id="app">
    <!-- Principal componente de Frmk7 App con parametros -->
    <f7-app :params="f7params">
      <!-- Barra de Estado en Mobile -->
      <f7-statusbar></f7-statusbar>
      <!-- Vista principal -->
      <f7-view main url="/"></f7-view>
    </f7-app>
  </div>
</template>

<script>
// Rutas de Componentes
import routes from './router'
// Tienda de datos locales 
import store from './store'

export default {
  data() {
    return {
      // Parametros de App
      f7params: {
        routes,
        store,
        name: 'App',
        id: 'App'
      }
    }
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app{
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>