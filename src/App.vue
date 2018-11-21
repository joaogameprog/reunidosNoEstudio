<template>
<div id="app">
    <v-app dark>
        <v-toolbar app fixed scroll-off-screen>
            <v-toolbar-title align-center>
                    <router-link tag="div" :to="{name: 'home'}" exact>
                        <v-layout row wrap align-center>
                            <img :src="require('./assets/logo.png')" height="50px"/>
                            <span class="to-upper">{{title}}</span>
                        </v-layout>
                    </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <router-link v-for="link in navLinks" :key="link.to" tag="v-btn" :to="{name: link.to}" >{{link.title}}</router-link>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <v-footer app absolute height="auto">
            <v-card flat tile width="100%" class="lighten-1 white--text text-xs-center">
                <v-card-text class="white--text py-0">
                    <v-layout row wrap class="px-2" align-center justify-space-between>
                            <v-spacer></v-spacer>
                            <v-icon class="red--text px2">mdi-email-outline</v-icon>
                            <a class="white--text" href="mailto:reunidosnoestudio@gmail.com" target="_blank">reunidosnoestudio@gmail.com</a>
                            <v-spacer></v-spacer>
                            <v-icon class="red--text">mdi-phone</v-icon>
                            <a class="white--text">(11) 9939-25334</a>
                            <v-spacer></v-spacer>
                            <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
                                <v-icon size="24px">{{ icon }}</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <span>&copy;2018 <strong>Reunidos no Estúdio</strong></span>
                            <v-spacer></v-spacer>
                    </v-layout>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Reunidos no Estúdio',
            icons: [
                'mdi-facebook',
                'mdi-instagram'
            ],

            navLinks: [
                { to: 'teaser', title: 'Teaser'},
                { to: 'about', title: 'O Projeto'},
                { to: 'episodes', title: 'Episódios'},
                { to: 'discs', title: 'Discografia'},
                { to: 'photos', title: 'Instagram'},
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
}

#nav {
    // padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.theme--dark.v-toolbar {
    background-color: #666;
    color: #fff;
}

.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: #666;
}

.router-link-exact-active{
    background-color: #ffbc49 !important;
    color: #666 !important;

}

.to-upper{
    text-transform: uppercase;
}


</style>
