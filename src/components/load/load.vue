<template>
  <div id="load">
    <img id="l_img" src="../../../static/img/load.png" alt="" />
  </div>
</template>

<script>
export default {
  props: {
    show: {
      required: true,
    },
  },
  data() {
    return {
      //   showload: false,
    };
  },
  watch: {
    // show(val) {
    //   let l = document.getElementById("l_img");
    //   if (val) {
    //     setTimeout(() => {
    //       l.style.transform = "rotateX(180deg)";
    //     }, 500);
    //   } else {
    //     l.style.transform = "rotateX(0deg)";
    //   }
    // },
  },
  mounted() {
    let l = document.getElementById("l_img"),
      load = document.getElementById("load"),
      h = window.innerHeight;
    load.style.height = h+"px";
    load.style.lineHeight = h+"px";
    if (this.show) {
      setTimeout(() => {
        l.style.transform = "rotateZ(270deg)";
      }, 0);
    } else {
      l.style.transform = "rotateZ(0deg)";
    }
  },
};
</script>

<style lang='scss' scoped>
#load {
  position: fixed;
  z-index: 99999;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 598px;
  text-align: center;
  line-height: 598px;
  opacity: 0.5;
  background-color: #adaaaa;
  img {
    width: 10%;
    color: #0465f7;
    transition: transform 1s;
    transform: rotateZ(0deg);
  }
}
</style>
