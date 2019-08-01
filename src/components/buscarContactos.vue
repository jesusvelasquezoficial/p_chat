<template>
  <div>
    <f7-page>
      <f7-navbar title="Todos los contactos" back-link>
        <f7-nav-right>
          <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search_strong" icon-f7="search" ></f7-link>
        </f7-nav-right>
        <f7-searchbar class="searchbar-demo" expandable search-container=".search-list" search-in=".item-title" ></f7-searchbar>
      </f7-navbar>
      <f7-list class="searchbar-not-found">
        <f7-list-item title="Nothing found"></f7-list-item>
      </f7-list>
      <f7-list class="search-list searchbar-found">
        <f7-list-item v-for="contacto in contactos" :title="contacto.username" :id="contacto.id"> {{contacto.email}}</f7-list-item>
      </f7-list>
    </f7-page>
  </div>
</template>
<script>
export default {
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
  }
};
</script>

<style scoped>
</style>
