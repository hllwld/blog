<template>
  <div class="cool" id="cool" :style="``">
    <img v-if="show" src="../../../static/img/yuan.png" alt="" />
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    wz_x: {
      // 必须提供字段
      required: true,
    },
    wz_y: {
      // 可选字段，有默认值
      required: true,
    },
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
  created() {
    let that = this;
    document.onmousedown = () => {
      setTimeout(() => {
        let a = document.getElementById("cool");
        // console.log(a)
        if (that.show == false) {
          a.style.left = that.wz_x - 15 + "px";
          a.style.top = that.wz_y - 15 + "px";
          a.style.transition = "transform 0.5s,opacity 0.5s";
          a.style.transform = "scale(2,2)";
          a.style.opacity = "0";
          that.show = true;
          setTimeout(() => {
            that.show = false;
            a.style.transform = "scale(1,1)";
            a.style.opacity = "1";
            a.style.left = "0px";
            a.style.top = "0px";
          }, 500);
        }
      }, 150);
    };
  },
  methods: {},
  components: {},
};
</script>

<style lang='scss' scoped>
.cool {
  z-index: 99;
  width: 30px;
  height: 30px;
  position: fixed;
  -webkit-user-select: none;
  img {
    opacity: 1;
    width: 100%;
    height: 100%;
  }
  //   img:hover{
  //     translate:(1.1,1.1)
  //   }
}
</style>
