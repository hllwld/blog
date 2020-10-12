<template>
  <div class="house">
      <div class="title">
          {{data.title}}
      </div>
      <div class="content">
          <div  v-for="(item,index) of contentlist" :key="index" class="contentlistitem">
              {{item}}
          </div>
      </div>
      <backhead v-if="showback"  @changeshowback='changeshow'/>
  </div>
</template>

<script type="text/javascript">
import backhead from '@/components/backhead/backhead'

export default {
  computed:{
    
  },
  data() {
    return {
      data:{
          title:'vscode常用快捷键',
          id:'001',
          content:'打开新的编辑器窗口 ctrl + shift + n;关闭编辑器窗口 ctrl + shift + w;展开全局命令面板 ctrl + shift + p;快速打开最近打开的文件 ctrl + p;打开搜索，替换 ctrl + h;移动上下行 alt + (上 / 下 | up / down);在当前行上复制上下行 shift + alt + (上 / 下 | up / down);在当前行下插入新的一行 ctrl + enter;在当前行上插入新的一行 ctrl + shift + enter;行视图上下偏移 ctrl + (上 / 下 | up / down);折叠区域代码 ctrl + shift + [;展开区域代码 ctrl + shift + ];代码收起 ctrl + k + 0;代码展开 ctrl + k + j;添加单行注释 ctrl + /;添加多行注释 shift + alt + a;格式化代码 shift + alt + f;删除当前行 shift + ctrl + k'
      },
      contentlist:[],
      showback:false,
    };
  },
  created() {
        this.contentlist=this.data.content.split(";")
        let that=this
    // that.data.id=that.$route.query.id?that.$route.query.id:''
        document.onmousewheel = function(){
        if(window.scrollY>=200){
            that.showback=true
        }else{
            that.showback=false
        }
        }
  },
  watch:{
    
  },
  methods: {
    changeshow(data){
        this.showback=data
    }
  },
  components: {
      backhead,
  }
};
</script>

<style lang='scss' scoped>
.house{
  width: 100%;
  overflow-x: hidden;
  margin-top:50px;
  background: #f0f3fa;
  .title{
      width: 100%;
      height: 80px;
      line-height: 80px;
      margin-left: 20%;
      font-size: 20px;
  }
  .content{
      .contentlistitem{
          width: 60%;
          height: 60px;
          margin: 10px auto;
          font-size: 14px;
      }
  }
  // background:url(../../../static/img/zz.png) no-repeat;
  // background-size: 100%;

}
</style>