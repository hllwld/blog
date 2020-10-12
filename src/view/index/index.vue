<template>
  <div class="house">
    <ontop />
    <home :articlelist="articlelist" />
    <box />
    <moxi />
    <cool :wz_x="wz_x" :wz_y="wz_y" />
    <backhead v-if="showback" @changeshowback="changeshow" />
    <!-- <game2048 /> -->
  </div>
</template>

<script type="text/javascript">
import cool from "@/components/cool/cool";
import moxi from "@/components/moxi/moxi";
import box from "@/components/box/box";
import home from "@/components/home/home";
import ontop from "@/components/ontop/ontop";
import backhead from "@/components/backhead/backhead";
// import game2048 from "@/components/2048/2048";

export default {
  computed: {
    // showback(){
    //   return
    // }
  },
  data() {
    return {
      data: {
        yhm: "",
        mm: "",
      },
      articlelist: [
        {
          title: "vscode常用快捷键",
          jj:
            "打开新的编辑器窗口 ctrl + shift + n关闭编辑器窗口 ctrl + shift + w。。",
          id: "001",
          cjrq: "2020-09-04",
        },
        {
          title: "2048",
          jj: "一个2048游戏",
          id: "002",
          cjrq: "2020-10-12",
        },
        {
          title: "3",
          jj: "烦不烦模式，听得见吗那个点",
          id: "003",
          cjrq: "2020-09-04",
        },
        {
          title: "4",
          jj: "教育科技是男方不得噶",
          id: "004",
          cjrq: "2020-09-04",
        },
        {
          title: "5",
          jj: "而她和具体加没加你还是个办法",
          id: "005",
          cjrq: "2020-09-04",
        },
        {
          title: "6",
          jj: "而他那个法术迸发二号台湾",
          id: "006",
          cjrq: "2020-09-04",
        },
        {
          title: "7",
          jj: "儿童你都不在搞不懂你",
          id: "007",
          cjrq: "2020-09-04",
        },
      ],
      xm: this.$route.query.xm,
      showback: false,
      mouse_wz: ".",
      wz_x: "",
      wz_y: "",
      mouse_down: "",
      mouse_up: "",
      ms_tip: false,
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
      that.mouse_wz = loc;
      // let a=document.getElementById('cube')
      // a.style.animationPlayState='running'
      // if(that.ms_tip){
      //   // a.style.animationPlayState='running'
      //   a.style.transform=`rotateX(${(Number(that.mouse_wz) - Number(that.mouse_down))/2}deg) rotateY(${(Number(that.mouse_wz) - Number(that.mouse_down))/2}deg)`
      // }
    };
    document.onmousewheel = function () {
      if (window.scrollY >= 600) {
        that.showback = true;
      } else {
        that.showback = false;
      }
    };
  },
  watch: {},
  methods: {
    changeshow(data) {
      this.showback = data;
    },
    go_(a) {
      console.log(a);
    },
  },
  components: {
    cool,
    moxi,
    box,
    home,
    ontop,
    backhead,
    // game2048,
  },
};
</script>

<style lang='scss' scoped>
.house {
  width: 100%;
  background: #f0f3fa;
  // background:url(../../../static/img/zz.png) no-repeat;
  // background-size: 100%;
}
</style>