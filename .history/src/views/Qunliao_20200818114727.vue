<template>
 <div>
<div class="beijing">
<div class="big-box">
<div class="left-box">
<div class="l-f">
<img class="user-tu" :src="avatar" alt="">
<div class="user-name">{{username}}</div>
</div>
<div class="l-f-t">用户列表</div>
<div v-for="(item,index) in arr" :key="index" class="user">
<img class="user-tu1" :src="item.avatar" alt="">
<div class="user-name1">{{item.username}}</div>
</div>
</div>
<div class="right-box">
<div class="r-g">聊天室({{count}})</div>
<!-- 聊天信息展示 -->
<div class="l-t-b">{{username}}加入了群聊</div>
<!-- 表情添加选项行 -->
<div class="t-p-b">
<img class="tu" src="../assets/xiaolian.png" alt="">
<img class="tu" src="../assets/jiandao.png" alt="">
<img class="tu" src="../assets/减 删除 文件-6.png" alt="">
</div>
<!-- 信息编辑区域 -->
<div></div>
<!-- 确定发送消息区域 -->
<div class="que-ding">按下Ctrl+Enter发送<button @click="sendMessage" class="fasong">发送</button></div>
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
count:1,
username:"",
avatar:"",
arr:[]
     }
   },
   methods: {
    
sendMessage(){
  
}

   },
   
sockets:{
  // 获取用户列表
userList(data){
  console.log(data)
  this.arr=data
},
// 用户下线
delUser(data){
  console.log(data)
},
// 获取所有消息
receiveMessage(data){
  console.log(data)
},


   },


  
   mounted() {
this.avatar=this.$route.query.avatar
this.username=this.$route.query.username
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
  display: flex;
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
.user{
     width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
  color: white;
  line-height: 60px;
  font-size: 16px;
  text-indent: 1em;
  display: flex;
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
  text-align: center;
  color: 12px;
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
  width: 80px;
  text-align: center;
  background-color: white;
  line-height: 30px;
  margin-left: 10px;
}
.user-tu{
  width: 40px;
  height: 40px;
  margin-top:20px ;
  margin-left: 20px;
}
.user-tu1{
    width: 40px;
  height: 40px;
  margin-top:10px ;
  margin-left: 20px;
}
.user-name{
  color: white;
  line-height: 80px;
  font-size: 16px;
 text-indent: 10px;
}
.user-name1{
    color: white;
  line-height: 60px;
  font-size: 16px;
 text-indent: 10px;
}
</style>