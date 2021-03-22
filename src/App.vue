<!--
App.vue
holds router-view, login credentials and server api.
-->
<template>
  <div id="app">    
    <router-view></router-view>
  </div>
</template>

<script> 
  /**
  * Login object
  * */ 
  var LOGIN = 
  {
     user: 'none',
     password: 'password',
     token: 'token'
  }
  /**
  * Server object
  * */ 
  var SERVERAPI = 
  {
    development : "https://localhost:44336/api/",
    production : "https://api.singledelivery.com.br/api/",
    server: "https://localhost:44336/api/",
  }
export default {
  name: 'App',
  /**
  * holds login credentials available in all components
  * to pass bearer token to axios calls.
  * */ 
  data() {
   return { LOGIN, SERVERAPI }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>