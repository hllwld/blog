<template>
  <div id="app">
    <router-view />
    <load :show="showload" v-if="showload" />
  </div>
</template>

<script>
import load from "./components/load/load";

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      showload: false,
    };
  },
  watch: {
    $route() {
      this.showload = true;
      let that = this;
      setTimeout(() => {
        that.showload = false;
      }, 1000);
    },
  },
  components: {
    load,
  },
};
</script>

<style>
body,
html {
  scroll-behavior: smooth;
}
</style>
