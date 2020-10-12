<template>
  <div class="home">
    <div class="body_bd" :w="data">局外人</div>
    <div class="go_bottom" @click="to_listall">
      <img class="go_bottom_img" src="../../../static/img/go_down.png" alt="" />
    </div>
    <div class="body"></div>
    <div class="vv">
      <div></div>
      <div></div>
    </div>
    <div class="box" id="box">
      <div class="listall" id="listall">
        <div
          class="listitem"
          v-for="(item, index) of articlelist"
          :key="index"
          @click="go_t(item)"
        >
          <div>
            <img
              src="https://jensonhui.top/usr/themes/Akina/images/random/deu3.jpg"
              alt=""
            />
          </div>
          <div>
            <div>
              <span class="titled">
                {{ item.title }}
              </span>
              <span style="font-size: 12px">
                {{ item.cjrq }}
              </span>
            </div>
            <div>
              {{ item.jj }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="foot"></div>
  </div>
</template>

<script type="text/javascript">
// import formItem from '@/components/formItem/formItem'
export default {
  props: {
    articlelist: {
      // 必须提供字段
      required: true,
    },
  },
  data() {
    return {
      data: [],
      test: 1,
    };
  },
  created() {},
  mounted() {},
  methods: {
    to_listall() {
      window.scrollTo(0, 600);
    },
    go_t(data) {
      this.$router.push({ name: `listxx`, query: { id: data.id } });
    },
  },
  components: {},
};
</script>

<style lang='scss' scoped>
.home {
  scroll-behavior: smooth;
  .body_bd {
    width: 100px;
    height: 50px;
    text-align: center;
    color: white;
    line-height: 50px;
    position: relative;
    z-index: 99;
    margin: 0px auto;
    margin-top: 300px;
  }
  .go_bottom {
    width: 50px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    position: relative;
    z-index: 99;
    margin: 0px auto;
    margin-top: 200px;
    transition: 1s;
    .go_bottom_img {
      width: 100%;
      height: 100%;
      transition: margin-top 0.2s;
    }
  }
  .go_bottom:hover {
    .go_bottom_img {
      margin-top: -10px;
    }
  }
  // .vv{

  // }
  .body {
    background-image: url("../../../static/img/bg.jpg");
    background-size: 100% 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    // border-radius: 0 0 50% 50%;
    height: 598px;
  }
  .box {
    width: 100%;
    background: #ffffff;
    position: relative;
    margin-top: -74px;
    .listall {
      position: relative;
      background: #ffffff;
      margin-top: 147px;
      width: 100%;
      .listitem {
        width: 60%;
        margin: 10px auto;
        height: 150px;
        display: flex;
        flex-direction: row;
        // justify-content: space-between;
        background: #ffffff;
        div:nth-child(1) {
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
        }
        div:nth-child(2) {
          width: calc(100% - 100px);
          height: 100%;
          div:nth-child(1) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 20px;
            .titled:hover {
              color: #96e264;
            }
          }
          div:nth-child(2) {
            font-size: 12px;
          }
        }
        div {
          margin: 5px;
          margin-left: 20px;
        }
      }
      .listitem:hover {
        background: #ebeaea;
      }
    }
  }
  .foot {
    width: 100%;
    height: 60px;
    position: relative;
    background: #fdfdfd;
  }
}
</style>
