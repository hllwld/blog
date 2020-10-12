<template>
  <div class="box" id="boxs"></div>
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
      num: 0,
    };
  },
  watch: {
    // wz_x(val){
    //     let a=document.getElementById()
    // },
  },
  created() {
    this.time();
  },
  methods: {
    time() {
      if (this.num > 10) {
        return;
      }
      // setTimeout(() => {
      //   var para = document.createElement("div");
      //   para.style.width = "10px";
      //   para.style.height = "10px";
      //   para.style.borderRadius = "50%";
      //   para.style.backgroundColor =
      //     "#" + Math.floor(Math.random() * 16777215).toString(16);
      //   console.log(para.style.backgroundColor);
      //   var element = document.getElementById("boxs");
      //   element.appendChild(para);
      //   this.$forceUpdate();
      //   this.num++;
      //   this.time();
      // }, 2000);
    },
  },
  components: {},
};
</script>

<style lang='scss' scoped>
#boxs {
  position: fixed;
  top: 200px;
  left: 50px;
  width: 200px;
  height: 200px;
  div {
    background-color: aqua;
  }
}
</style>