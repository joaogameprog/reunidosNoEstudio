<template>
    <v-container grid-list-md fluid justify-center>
            <v-layout  justify-space-between row fill-height wrap>
                <v-flex v-for="(episode, i) in episodes" :key="i" xs12 md6 justify-center>
                    <v-card>
                        <v-img
                        :src="episode.picture"
                        aspect-ratio="2"
                        ></v-img>

                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{episode.title}}</h3>
                            <div>{{episode.description}}</div>
                        </div>
                        </v-card-title>

                        <v-card-actions>
                            <iframe :src="`https://open.spotify.com/embed/${episode.spotifyId}`" width="900" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
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
                        // picture: 'https://instagram.com/p/Bp5r2voFc4Q/media/?size=l',
                        picture: (require('@/assets/toca-disco.jpg')),
                        title: 'Faixa 1 - Contexto histórico',
                        description: 'Imagine uma época de muito sucesso, com artistas recordistas de venda de discos dos anos 60, 70 e 80 da música brasileira. Elis Regina, Raul Seixas, Gal Costa, Tim Maia, Gilberto Gil e outros grandes nomes. Talento, criatividade e tecnologia misturados, há mais de 50 anos, em um espaço único, localizado na Avenida Paulista, dentro do Edifício da Gazeta. Nesse documentário, você conhece a história de um dos mais importantes estúdios de gravação do nosso país, os Estúdios Reunidos. Nosso documentário está dividido em quatro faixas. ',
                        spotifyId: 'episode/6B6c9GiVjIUjV6tTQoMjUw'
                    },
                    {
                        picture: 'https://instagram.com/p/Bp5r2voFc4Q/media/?size=l',
                        title: 'Faixa 2 - A estrutura dos estúdios Reunidos',
                        description: 'Nessa faixa você conhece um pouco sobre a estrutura dos estúdios reunidos na época. Salas de Eco, os equipamentos e mesa de som fabricados ali mesmo no local do estúdio são algumas das curiosidades contadas pelos artistas que ali frequentavam. Dick Danello, Helio Costa Manso, Os Carbonos, Ronnie Von, Sergio Valério, Giliard.',
                        spotifyId: 'episode/663KaoHEPnmhRrdrZIBkKz'
                    },
                    {
                        picture: 'https://instagram.com/p/Bp5sehJFsx-/media/?size=l',
                        title: 'Faixa 3 - Personagens anônimos',
                        description: 'Aqui os artistas contam um pouco dos bastidores e os personagens anônimos que faziam parte dos Estúdios Reunidos. Dona Benigna que fazia um almoço delicioso, Tinha um menino com o apelido de Pistolinha começou vendendo balas de coco e depois criou seu próprio estúdio. e entre os grandes técnicos o destaque para o Rogério Gaus, homenageado nesse episódio pelo cantor Ronnie Von entre outras curiosidades.',
                        spotifyId: 'episode/66c6viI0o1IDYZ9kyzYJtN'
                    },
                    {
                        picture: 'https://instagram.com/p/Bp5lzu_FWEu/media/?size=l',
                        title: 'Faixa 4 - Músicas e músicos',
                        description: 'Nessa Faixa 4, vamos conhecer alguns de varios artistas que já passaram por aqui, com suas histórias inéditas. Gal Costa, Wando, Tim Maia, Harmonycats, Steve Maclen, Giliard, Nelson Ned, Os Carbonos, Benito Di Paula, Elis Regina, Guilherme Arantes, Milionário e José Rico, Chitãozinho e Xororó, Cristhian e Ralph, Dave Maclean, Morris Albert, Paulo Sergio, Gretchen, Mister Sam, são alguns dos artistas que fizeram muito sucesso aqui nos "Estúdios Reunidos" e você confere nessa faixa.',
                        spotifyId: 'episode/101eCVGkBvRYtPG1dVinXj'
                    },
                ]
            }
        },
        mounted() {
            window.instgrm.Embeds.process();
        },

    };
</script>