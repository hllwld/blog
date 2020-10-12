<template>
  <div class="on_top" id="on_top">
    <div class="navigation">
      <div class="gjdiv">
        <img class="biao" src="../../../static/img/fly.png" alt="" style="" />
      </div>
      <div
        v-for="(item, index) of form"
        :key="index"
        :class="item.class"
        @click="form_click(item)"
      >
        {{ item.title }}
        <div v-if="item.title == '发现' && is_more" class="morelist">
          <div v-for="(iten, index) of morelist" :key="index" class="moreitem">
            {{ iten.title }}
          </div>
        </div>
      </div>
      <div style="width: calc(30% - 2px)" @click="changecss">
        <div class="logined">
          <!-- {{xm}}!你好 -->
          <img
            class="tx"
            src="//q.qlogo.cn/g?b=qq&nk=1786128750&s=160"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  // props:{
  //     form: {  // 必须提供字段
  //         required: true
  //     },
  //     morelist: {  // 必须提供字段
  //         required: true
  //     },
  // },
  data() {
    return {
      is_more: false,
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
  created() {},
  methods: {
    form_click(data) {
      if (data.title == "发现") {
        this.is_more = !this.is_more;
      }
      if (data.title == "首页") {
        this.$router.push({ name: "index" });
      }
    },
    changecss(){
      // let on=document.getElementById("on_top"),h=window.innerHeight+"px"
      // on.style.width="20%"
      // on.style.height=h
      // on.style.position="absolute"
      // on.style.left="80%"
      // on.style.right="0px"
    }
  },
  components: {},
};
</script>

<style lang='scss' scoped>
.on_top {
  width: 100%;
  height: 50px;
  background-image: linear-gradient(#fafafa, #d1d1d3);
  position: fixed;
  transition: all 0.5s;
  z-index: 100;
  top: 0px;
  left: 0px;
  .navigation {
    z-index: 999;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 0rem auto;
    // background:url(../../../static/img/OIP.png);
    .gjdiv {
      width: 10%;
      height: 40px;
      margin-top: 10px;
      position: relative;
      .biao {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
      }
    }
    .gjdiv:hover {
      .biao {
        animation: imgd 2s linear infinite;
      }
    }
    div {
      width: calc(15% - 2px);
      text-align: center;
      line-height: 50px;
      height: 100%;
      font-weight: 100;
      text-shadow: 0 0 #000, -1px -1px #000, 0 -1px #000, -1px 0 #000;
      .morelist {
        position: absolute;
        margin-top: 0px;
        width: calc(15% - 2px);
        height: 100px;
        background: white;
        .moreitem {
          width: 100%;
          height: 25%;
          line-height: 25px;
          background: #dfe5f5;
        }
        .moreitem:hover {
          color: #71a1e0;
        }
      }
      .logined {
        width: 100%;
        text-align: left;
        padding-left: 20px;
        height: calc(100% - 2px);
        position: relative;
        // border: 1px solid black;
        // border-radius: 50%;
        // background: rgb(209, 208, 208);
        .tx {
          position: absolute;
          height: 100%;
          width: 25%;
          border-radius: 50%;
          right: 50px;
          top: 0px;
        }
      }
    }
    div:hover {
      transition: 0.2s;
      color: #71a1e0;
      .moreitem {
        color: #0d0d0e;
      }
    }
    .sy {
      font-size: 20px;
    }
    // .sy:hover{
    //     transition:1s;
    //     transform: rotateY(60deg);
    // }
    @keyframes imgd {
      0% {
        transform: rotate(0deg);
        margin-left: 0px;
        margin-top: 10px;
      }
      40% {
        transform: rotate(360deg);
        margin-left: 0px;
        margin-top: 10px;
      }
      80% {
        transform: rotate(360deg);
        margin-left: -100px;
        margin-top: -10px;
      }
      100% {
        transform: rotate(360deg);
        margin-left: -400px;
        margin-top: -100px;
      }
    }
  }
}
</style>
