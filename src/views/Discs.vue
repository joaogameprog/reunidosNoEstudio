<template>
    <v-container grid-list-md fluid justify-center>
            <v-layout  justify-space-around row fill-height wrap>
                <v-flex v-for="(episode, i) in episodes" :key="i" xs12 sm6 md4 justify-center>
                    <v-card>
                        <v-img
                        :src="episode.picture"
                        aspect-ratio="1"
                        ></v-img>

                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{episode.title}}</h3>
                            <div>{{episode.description}}</div>
                        </div>
                        </v-card-title>

                        <v-card-actions>
                            <iframe :src="`https://open.spotify.com/embed/${episode.spotifyId}`" width="900" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
    export default {
        data() {
            return {
                episodes: [
                    {
                        picture: (require('@/assets/guilherme-arantes-300x300.jpg')),
                        title: 'Guilherme Arantes',
                        description: '',
                        spotifyId: 'album/73O0MP2xoSRXWIv7DwMghs'
                    },
                    {
                        picture: (require('@/assets/elis-romaria-300x300.jpg')),
                        title: 'Elis Regina',
                        description: '',
                        spotifyId: 'album/67UdOjU4vLZx8yoHgXkNes'
                    },
                    {
                        picture: (require('@/assets/BENITO-DI-PAULA-GRAVADO-AO-VIVO-Capa-300x300.jpg')),
                        title: 'Benito de Paula',
                        description: '',
                        spotifyId: 'album/16QY7n9HWbGE2csWhoWZc9'
                    },
                    {
                        picture: (require('@/assets/Gilliard.jpg')),
                        title: 'Gilliard',
                        description: '',
                        spotifyId: 'album/6iAgefOeYGLLimRQ0ZY6Hr'
                    },
                    {
                        picture: (require('@/assets/Ronnie von.jpg')),
                        title: 'Ronnie Vonn',
                        description: '',
                        spotifyId: 'album/09ZhiZt6yhu4kwzKeUr6L7'
                    },
                    {
                        picture: (require('@/assets/Dick Danello.jpg')),
                        title: 'Dick Danello',
                        description: '',
                        spotifyId: 'album/0bqm0iR3txaxfo0jifeXWa'
                    },
                ]
            }
        },
        mounted() {
            window.instgrm.Embeds.process();
        },

    };
</script>