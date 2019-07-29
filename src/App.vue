<template>
  <!-- <div id="app">
    <router-view/>
  </div> -->
  <!-- App Root Element -->
    <div id="app">
      <!-- Main Framework7 App component where we pass Framework7 params -->
        <f7-app :params="f7params">
          <f7-statusbar></f7-statusbar>
          <!-- initial page is specified in routes.js -->
          <f7-view main url="/"></f7-view>
        </f7-app>
    </div>
</template>

<script>
import routes from './router'
import store from './store'

export default {
  data() {
    return {
      // app params
      f7params: {
        routes,
        store,
        name: 'App',
        id: 'App'
        // specify routes for app
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
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
