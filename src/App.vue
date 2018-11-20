<template>
<div id="app">
    <v-app dark>
        <v-toolbar app absolute>

            <v-toolbar-title v-text="title"><img src="./assets/logo.png" /></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                    <router-link tag="v-btn" :to="{name: 'home'}" flat>O Estudio</router-link>
                    <router-link tag="v-btn" :to="{name: 'discs'}" flat>Capas de Vinil</router-link>
                    <router-link tag="v-btn" :to="{name: 'photos'}" flat>Instagram</router-link>
                    <router-link tag="v-btn" :to="{name: 'about'}" flat>Sobre</router-link>
                    <router-link tag="v-btn" :to="{name: 'contact'}" flat>Contato</router-link>
                </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer absolute dark height="auto">
            <v-card flat tile width="100%" class="indigo lighten-1 white--text text-xs-center">
                <v-card-text class="white--text py-0">
                    <v-layout row wrap class="px-5">
                        <v-flex align-center xs4>
                            <v-icon class="red--text">mdi-email-outline</v-icon>
                            <a class="white--text" href="mailto:reunidosnoestudio@gmail.com" target="_blank">reunidosnoestudio@gmail.com</a>
                        
                        
                            <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
                                <v-icon size="24px">{{ icon }}</v-icon>
                            </v-btn>
                        
                            <v-icon class="red--text">mdi-phone</v-icon>
                            <a class="white--text">11993925334</a>
                        </v-flex>
                    </v-layout>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    &copy;2018 — <strong>Reunidos no Estudio</strong>
                </v-card-text>
            </v-card>
        </v-footer>
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
            title: 'Reunidos no Estudio',
            icons: [
                'mdi-facebook',
                'mdi-instagram'
            ]
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
