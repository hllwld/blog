<template>
  <div class="backhead" @click="back">
    <img src="../../../static/img/backhead.png" alt="" />
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    // showback: {  // 必须提供字段
    //     required: true
    // },
  },
  // data() {
  //     return {
  //     data:''
  //     };
  // },
  created() {},
  methods: {
    back() {
      this.$emit("changeshowback", false);
      window.scrollTo(0, 0);
    },
  },
  components: {},
};
</script>

<style lang='scss' scoped>
.backhead {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 20px;
  bottom: 50px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
