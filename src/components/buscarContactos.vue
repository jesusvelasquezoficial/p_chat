<template id="buscarContactos">
  <div>
    <f7-page>
      <!-- Barra de navegacion -->
      <f7-navbar>
        <f7-nav-left sliding>
          <f7-link @click="$f7router.navigate('/')" icon-md="f7:arrow_left"></f7-link>
        </f7-nav-left>
        <f7-nav-title>Todos los Contactos</f7-nav-title>
        <!-- Buscar Contactos -->
        <f7-nav-right>
          <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search_strong" icon-f7="search" ></f7-link>
        </f7-nav-right>
        <f7-searchbar class="searchbar-demo" expandable search-container=".search-list" search-in=".item-title" ></f7-searchbar>
      </f7-navbar>
      <!-- Contacto no Existente -->
      <f7-list class="searchbar-not-found">
        <f7-list-item title="Nothing found"></f7-list-item>
      </f7-list>
      <!-- Lista de todos los Contactos -->
      <f7-list class="search-list searchbar-found">
        <f7-list-item v-for="contacto in contactos" :title="contacto.username" :key="contacto.id" > 
          <!-- Boton Añadir Contacto -->
          <f7-link icon-f7="add_round" color="blue"></f7-link>
          <!-- Boton Eliminar Contacto -->
          <!-- <f7-link icon-f7="delete_round_fill" color="red"></f7-link> -->
        </f7-list-item>
      </f7-list>
    </f7-page>
  </div>
</template>
<script>
export default {
  id: "buscarContactos",
  name: "buscarContactos",
  data() {
    return {
      contactos: [
        {id: 1, username: "Jairo Moncada", email: "jairo@gmail.com"},
        {id: 2, username: "Fernando Agreda", email: "fernando@gmail.com"},
        {id: 3, username: "Jesus Velasquez", email: "jesus@gmail.com"},
        {id: 4, username: "Omar Carvajañ", email: "omar@gmail.com"},
        {id: 5, username: "Melany Moncada", email: "melany@gmail.com"},
        {id: 6, username: "Vitto Agreda", email: "vitto@gmail.com"},
      ]
    };
  },
  mounted() {
    // Listar Contactos del Servidor
    this.axios.get('https://10.0.1.7:4001/api/listarUsuarios').then(res => {
      this.contactos = res.data.data
    }).catch(error => {
      console.log("Ha ocurrido un ERROR al extraer los datos del SERVIDOR");
      console.log(error);
    })
  // this.contactos.push({id: 7, username: "Aida Pernia", email: "aida@gmail.com"}) 
  }
};
</script>

<style scoped>
</style>
