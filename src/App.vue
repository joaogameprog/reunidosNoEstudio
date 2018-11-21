<template>
<div id="app">
    <v-app dark>
        <v-navigation-drawer
        clipped
        v-model="drawer"
        fixed
        app
        v-if="$vuetify.breakpoint.smAndDown"
        >
            <img :src="require('./assets/logo.png')" class="drawer-icon"/>
            <v-list>
                <router-link
                    :to="{name: item.to}" 
                    exact
                    tag="v-list-tile"
                    value="true"
                    v-for="(item, i) in navLinks"
                    :key="i"
                >
                    <v-list-tile-content class="text-uppercase">
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </router-link>
            </v-list>
                <v-card class="drawer-footer">
                    <v-list>
                        <v-toolbar transparent>
                            <v-btn @click="openLink(link.destination)" v-for="(link, i) in socialLinks" :key="i" class="mx-3 white--text" icon>
                                <v-icon size="24px">{{ link.icon }}</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-divider></v-divider>
                        <v-list-tile>
                            <v-list-tile-content>
                                <v-list-tile-title>
                                    <span class="mx-3">&copy;2018 <strong>Reunidos no Estúdio</strong></span>
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
        </v-navigation-drawer>
        <v-toolbar app fixed scroll-off-screen>
            <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown"></v-toolbar-side-icon>
            <v-toolbar-title align-center>
                    <router-link tag="div" :to="{name: 'home'}" exact>
                        <v-layout row wrap align-center>
                            <img v-if="$vuetify.breakpoint.mdAndUp" :src="require('./assets/logo.png')" height="50px"/>
                            <span class="text-uppercase">{{title}}</span>
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
                    <v-layout row wrap class="px-2" align-center justify-center>
                            <v-btn @click="openLink(link.destination)" v-for="(link, i) in socialLinks" :key="i" class="mx-3 white--text" icon>
                                <v-icon size="24px">{{ link.icon }}</v-icon>
                            </v-btn>
                            <span class="mx-3">&copy;2018 <strong>Reunidos no Estúdio</strong></span>
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
            drawer: false,

            title: 'Reunidos no Estúdio',
            socialLinks: [
                {destination: 'mailto:reunidosnoestudio@gmail.com', icon: 'mdi-email'},
                {destination: 'https://open.spotify.com/show/0E5HIZFZid2398JUbCUx0Q?si=8nnjh25kTQuuh5Zgf9vHHQ', icon: 'mdi-spotify'},
                {destination: 'https://www.facebook.com/reunidosnoestudio/', icon: 'mdi-facebook'},
                {destination: 'https://www.instagram.com/reunidosnoestudio/', icon: 'mdi-instagram'},
                {destination: 'https://www.youtube.com/channel/UCUYvfdC4TUfl4-nErXtr0zQ/', icon: 'mdi-youtube'}
            ],

            navLinks: [
                { to: 'teaser', title: 'Teaser'},
                { to: 'about', title: 'O Projeto'},
                { to: 'episodes', title: 'Episódios'},
                { to: 'discs', title: 'Discografia'},
                { to: 'photos', title: 'Instagram'},
                { to: 'extras', title: 'Extras'},
            ]
        }
    },
    methods: {
        openLink(to){
            window.open(to,'_blank')
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

.drawer-icon {
    width: 60%;
    margin: 10px;
    border-radius: 20px;
}

.drawer-footer {
    bottom: 0;
    position: absolute;
}



</style>
