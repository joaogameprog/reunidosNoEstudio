<template>
  <div id="app">
    <v-app dark>
      <v-toolbar   class="white">
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Estudio</v-btn>
          <v-btn flat>Capas de Vinil</v-btn>
          <v-btn flat>Sobre</v-btn>
          <v-btn flat>Contato</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-2">
                <v-icon class="red--text">mdi-email-outline</v-icon>
                <a class="white--text" href="mailto:reunidosnoestudio@gmail.com" target="_blank">reunidosnoestudio@gmail.com</a>
              
                <v-icon class="red--text">mdi-phone</v-icon>
                <a class="white--text">11993925334</a>
                
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-app>
    <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Reunidos no Estudio'
    }
  }
}
</script>


<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
