<template>
 <div>
<div class="beijing">
<div class="big-box">
<div class="left-box">
<div class="l-f"></div>
<div class="l-f-t">用户列表</div>
</div>
<div class="right-box">
<div class="r-g">聊天室({{count}})</div>
<!-- 聊天信息展示 -->
<div class="l-t-b"></div>
<!-- 表情添加选项行 -->
<div class="t-p-b">
<img class="tu" src="../assets/xiaolian.png" alt="">
<img class="tu" src="../assets/jiandao.png" alt="">
<img class="tu" src="../assets/减 删除 文件-6.png" alt="">
</div>
<!-- 信息编辑区域 -->
<div></div>
<!-- 确定发送消息区域 -->
<div class="que-ding">按下Ctrl+Enter发送<button class="fasong">发送</button></div>
</div>
</div>

</div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
count:0
     }
   },
   methods: {


   },
   sockets:{
sockets:{



   },


   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.beijing{
  width: 100%;
height: 720px;
  background-image: url('../../src/assets/bg.jpg');
display: flex;

}
.big-box{
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
}
.left-box{
  width: 30%;
  height: 100%;
  background-color: #2e3238;
}
.right-box{
  width: 70%;
  height: 100%;
 background-color: #eeeeee;
 position: relative;
}
.l-f{
  width: 100%;
  height: 80px;
  border-bottom: 1px solid black;
}
.l-f-t{
   width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
  color: white;
  line-height: 60px;
  font-size: 16px;
  text-indent: 1em;
  
}
.r-g{
     width: 96%;
  height: 60px;
  border-bottom: 1px solid black;
text-align: center;
  line-height: 60px;
  font-size: 18px;
margin: 0 auto;

}
.l-t-b{
  width: 100%;
  height: 60%;
  border-bottom: 1px solid black;
}
.t-p-b{
  width: 100%;
  display: flex;
}
.tu{
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-top: 10px;
}
.que-ding{
  color: #cccccc;
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.fasong{
  width: 100px;
  text-align: center;
  background-color: white;
  line-height: 20px;
}
</style>