<template>
  <div class="container">
    <div class="cube" id="cube">
      <div class="front">前</div>
      <div class="back">后</div>
      <div class="top">上</div>
      <div class="bottom">下</div>
      <div class="left">左</div>
      <div class="right">右</div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    // wz_x: {  // 必须提供字段
    //     required: true
    // },
    // wz_y: {   // 可选字段，有默认值
    //     required:true
    // },
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    // wz_x(val){
    //     let a=document.getElementById()
    // },
  },
  created() {},
  methods: {},
  components: {},
};
</script>

<style lang='scss' scoped>
.container {
  margin: 100px auto;
  right: 100px;
  top: 0px;
  width: 100px;
  height: 100px;
  position: fixed;
  z-index: 101;
  .cube {
    width: 50px;
    height: 50px;
    margin: 15px auto;
    position: absolute;
    transform-style: preserve-3d;
    animation: anim 10s linear infinite;
    div {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      position: absolute;
    }
    .front {
      background: rgba(255, 0, 0, 0.3);
      transform: translateZ(25px);
      animation: item_font 4s linear infinite;
    }
    .front:hover {
      width: 110%;
      height: 110%;
    }
    .back {
      background: rgba(255, 0, 255, 0.3);
      transform: translateZ(-25px);
      animation: item_back 4s linear infinite;
    }
    .back:hover {
      width: 110%;
      height: 110%;
    }
    .left {
      background-color: rgba(255, 255, 0, 0.3);
      transform-origin: left;
      transform: rotateY(90deg) translateX(-25px);
    }
    .left:hover {
      width: 110%;
      height: 110%;
    }
    .right {
      background: rgba(0, 255, 0, 0.3);
      transform-origin: right;
      transform: rotateY(90deg) translateX(25px);
      // animation: item_right 4s linear infinite;
    }
    .right:hover {
      width: 110%;
      height: 110%;
    }
    .top {
      background: rgba(255, 0, 255, 0.3);
      transform: rotateX(90deg) translateZ(25px);
      // animation: item_top 4s linear infinite;
    }
    .top:hover {
      width: 110%;
      height: 110%;
    }
    .bottom {
      background: rgba(0, 0, 255, 0.3);
      transform: rotateX(-90deg) translateZ(25px);
      // animation: item_bottom 4s linear infinite;
    }
    .bottom:hover {
      width: 110%;
      height: 110%;
    }
    @keyframes anim {
      0% {
        transform: rotateX(0deg) rotateY(0deg);
      }
      100% {
        transform: rotateX(360deg) rotateY(360deg);
      }
    }
    @keyframes item_font {
      0% {
        transform: translateZ(25px);
      }
      50% {
        transform: translateZ(75px);
      }
      100% {
        transform: translateZ(25px);
      }
    }
    @keyframes item_back {
      0% {
        transform: translateZ(-25px);
      }
      50% {
        transform: translateZ(-75px);
      }
      100% {
        transform: translateZ(-25px);
      }
    }
  }
  .cube:hover {
    animation-play-state: paused;
  }
}
</style>
