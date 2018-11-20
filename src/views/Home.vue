<template>
  <div class="home">
          <iframe id="ytplayer" type="text/html" width="100%" height="100%"
src="https://www.youtube.com/embed/sVSDDLwp0GE?autoplay=1&controls=0&disablekb=1&fs=0&color=white&iv_load_policy=3"
frameborder="0" />
            <!-- <img src="../assets/logo.png" height="300"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.home{
  height: 500px;
}
</style>

