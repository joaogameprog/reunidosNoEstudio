<template>
  <div class="extras">
    <div class="youtube" v-for="videoId in videos" :key="videoId">
      <youtube :video-id="videoId" :player-vars="playerVars" resize width="100%" height="100%" ref="youtube"></youtube>
    </div>
  </div>
</template>

<script>

export default {
  name: "extras",
  data(){
    return {
      videos: [
        '7TlRFDsxWes',
        'M_TkCx3fUfM',
      ],
      playerVars: {
        autoplay: 0,
        color: 'red',
        showinfo: 0,
        rel: 0,
      }
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.extras{
  .youtube{
    min-width: 50%; 
    max-width: 90%; 
    width: 800px;
    height: 800*.56px;
    min-height: 50vw*.56;
    max-height: 90vw*.56;
    margin: 3% auto;
    :before{
      content: "";
      display: block;      
      padding-top: 56.25%;
    }
  }
}
</style>

