<template>
<v-container justify-center align-center class="about">
  <v-img id="image" :src="require('@/assets/logo.png')"></v-img>
    <h1>O Projeto</h1>
    <p>Nossa proposta, consistiu em criar um
documentário radiofônico expandido sobre os “Estúdios Reunidos”, que nas
décadas de 1960 e 1970 tiveram grande destaque na produção musical e
publicitária brasileira. Localizados dentro dos complexos da Fundação Cásper
Líbero, no mesmo andar da Rádio Gazeta, o “Reunidos” ainda não teve a sua
história contada, conforme levantamento prévio realizado por revisão
sistemática de literatura e entrevista feita com o pesquisador da indústria
fonográfica brasileira Eduardo Vicente, segundo o qual há poucas
informações, muitas delas desencontradas, a respeito dos “Reunidos”.
    </p>
    <p>Esta já é, por certo, uma justificativa para realização deste trabalho,
sobremaneira quando se pensa que ele é feito por um aluno da Faculdade
Cásper Líbero e no formato documental, pouco explorado, conforme indicado,
quando se fala de produtos sonoros. Mas a isto deve-se somar algo de ordem
pessoal. O autor, com décadas de experiência profissional em rádio, julgou que
seria um desafio pessoal, acadêmico e profissional aventurar-se na modalidade
deste projeto.</p>

<v-img class="author-photo"  :src="require('@/assets/author.jpg')"></v-img>
<h1>Sobre o autor</h1>
<p>
Trabalhando na Rádio Gazeta, Roberto Vilela, obteve contato com alguns funcionários que
mencionaram, por diversas ocasiões, os “Reunidos”, contando com
saudosismo histórias dos tempos áureos, relatos na ameaça de se perderem,
não apenas porque nunca foram registrados, mas também porque o próprio
local onde o estúdio funcionou está na iminência de ser reformado e
remodelado. Para interpretar e preservar esta história, sobre a qual inexistem
livros, dissertações, teses, ou documentos de outra ordem, criou-se este
projeto, que parece justificar sua pertinência, sobretudo, pela paradoxal
relevância dos estúdios e a ausência de registros sobre eles, um espaço onde
gravaram nomes como Elis Regina, Benito de Paula, Wando, Dick Danello,
Morris Albert, Jessé, Os Carbonos, Harmony Cats, Chrystian e
Ralf, Márcio Antonucci da banda os Vips, Dudu França, Nelson Ned, Lee
Jackson e o pianista Eduardo Assad.</p>
<v-img class="author-photo" src="https://instagram.com/p/Bp5r2voFc4Q/media/?size=l"></v-img>
</v-container>
</template>

<style lang="scss" scoped>
.about{
  #image{
    margin: 50px auto;
    max-width: 25%;
    border-radius: 20px;
  }
  .author-photo{
    border-radius: 30px 0;
    margin: 20px auto;
    max-width: 80%;
  }
  max-width: 1000px;
  p {
    margin: 3rem 0;
    text-align: justify;
    text-justify: inter-word;
    font-size: 14pt;
  }
}
</style>

