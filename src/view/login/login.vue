<template>
  <div class="login">
    <div class="box">
      <formItem :formData="form" :data="data" :clk="form_click" />
      <div class="submit" @click.stop="login()">登陆</div>
    </div>
  </div>
</template>

<script type="text/javascript">
import formItem from "@/components/formItem/formItem";
export default {
  data() {
    return {
      data: {
        yhm: "",
        mm: "",
      },
      form: [
        {
          title: "用户名",
          id: "yhm",
          tip: "请输入",
          type: "text",
          readonly: false,
          class: "middle",
        },
        {
          title: "密码",
          id: "mm",
          tip: "请输入",
          type: "password",
          readonly: false,
          class: "middle",
        },
      ],
    };
  },
  created() {},
  methods: {
    form_click(data) {
      console.log(data);
    },
    login() {
      // console.log(1)
      this.$router.push({
        name: "index",
        query: { fs: "1", xm: this.data.yhm },
      });
    },
  },
  components: {
    formItem,
  },
};
</script>

<style lang='scss' scoped>
.login {
  width: 100%;
  .box {
    width: 50%;
    height: 200px;
    margin: 100px auto;
    padding: 50px 50px;
    background-image: url("https://tse1-mm.cn.bing.net/th?id=OIP.yPEBi69raqV5QW3aTmEQsgHaFj&w=153&h=110&c=8&rs=1&qlt=90&dpr=1.5&pid=3.1&rm=2");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: white;
    border-radius: 10%;
  }
}
</style>
