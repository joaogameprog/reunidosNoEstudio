<template>
  <div class="extras">
    <div class="youtube" v-for="videoId in videos" :key="videoId">
      <youtube :video-id="videoId" :player-vars="playerVars"  ref="youtube"></youtube>
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
    width: 50%; 
    height: 400px;
    margin: 1% auto;
  }
}
</style>

