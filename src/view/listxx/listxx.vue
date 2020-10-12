<template>
  <div class="housed">
    <!-- <div class="title">
          {{data.title}}
      </div>
      <div class="content">
          {{content}}
      </div> -->
    <listitem1 v-if="data.id == '001'" />
    <listitem2 v-if="data.id == '002'" />
    <ontop />
    <moxi />
    <cool :wz_x="wz_x" :wz_y="wz_y" />
  </div>
</template>

<script type="text/javascript">
import cool from "@/components/cool/cool";
import moxi from "@/components/moxi/moxi";
import ontop from "@/components/ontop/ontop";
import listitem1 from "@/components/listitem/listitem1/listitem";
import listitem2 from "@/components/listitem/listitem2/listitem";

export default {
  computed: {},
  data() {
    return {
      wz_x: "",
      wz_y: "",
      data: {
        title: "vscode常用快捷键",
        id: "",
        content: "",
      },
      form: [
        { title: "首页", id: "home", class: "sy" },
        { title: "新闻", id: "mm" },
        { title: "问问", id: "mm" },
        { title: "待定", id: "mm" },
        { title: "发现", id: "mm" },
      ],
      morelist: [
        { title: "找找看", id: "find", class: "find" },
        { title: "找找看", id: "find", class: "find" },
        { title: "找找看", id: "find", class: "find" },
        { title: "找找看", id: "find", class: "find" },
      ],
    };
  },
  created() {
    let that = this;
    //鼠标事件
    document.onmousemove = function (e) {
      var loc = e.clientX,
        lod = e.clientY;
      that.wz_x = loc;
      that.wz_y = lod;
    };
    that.data.id = that.$route.query.id ? that.$route.query.id : "";
  },
  watch: {},
  methods: {},
  components: {
    cool,
    moxi,
    ontop,
    listitem1,
    listitem2,
  },
};
</script>

<style lang='scss' scoped>
.housed {
}
</style>