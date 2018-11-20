<template>
  <div class="home">
      <section>
        <v-parallax src="../assets/show-bg.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
          
            <img src="../assets/logo.png" height="300">
          </v-layout>
        </v-parallax>
      </section>
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
