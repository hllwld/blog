<template>
  <div class="formitem">
    <div v-for="(item, index) of formData" :key="index">
      <div>
        {{ item.title }}
      </div>
      <div v-if="item.type == 'text'">
        <input type="text" v-model="data[item.id]" />
      </div>
      <div v-if="item.type == 'password'">
        <input type="password" v-model="data[item.id]" />
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    formData: {
      // 必须提供字段
      required: true,
    },
    data: {
      // 可选字段，有默认值
      default() {
        return "";
      },
      required: true,
    },
    clk: {
      default() {
        return function () {};
      },
    },
  },
  // data() {
  //     return {
  //     data:''
  //     };
  // },
  created() {},
  methods: {},
  components: {},
};
</script>

<style lang='scss' scoped>
.formitem {
  width: 100%;
  height: 100px;
}
</style>
