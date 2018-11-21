<template>
  <div class="teaser">
    <youtube :video-id="videoId" :player-vars="playerVars" width="100%" height="100%" resize ref="youtube" @ended="teaserEnded"></youtube>
  </div>
</template>

<script>

export default {
  name: "teaser",
  data(){
    return {
      videoId: 'sVSDDLwp0GE',
      playerVars: {
        autoplay: 1,
        controls: 0,
        color: 'red',
        showinfo: 0,
        rel: 0,
      }
    }
  },
  methods: {
    teaserEnded(){
      this.$router.push({name: 'about'})
    }
  }
};
</script>

<style lang="scss" scoped>
.teaser{
  height: 100%;
}
</style>

