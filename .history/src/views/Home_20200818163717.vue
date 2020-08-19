<template>
<div>
<!-- 登录界面 -->

 <div v-if="act===0">
<div class="beijing">
<div class="box">
<div class="bt">用户登录</div>
<div class="yhm">用户名</div>
<input class="s-r-k" type="text" placeholder="请输入用户名" v-model="username">
<div class="yhm">选择头像</div>
<div class="touxiang-box">
<div v-for="(item,index) in list" :key="index" class="t-x">
<img class="t-p" :src="item.name" alt="" :class="{'bor' : active === index}"  @click="dianji(index,item)">
</div>

</div>
<div v-if="flag===true" class="s-b">登录失败，用户名重复</div>
<div class="dl" @click="login">登录</div>

</div>
</div>
 </div>
<!-- 群聊界面 -->
<div v-if="act===1">
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
<div class="l-t-b">
<div v-for="(item,index) in xiaoxi" :key="index">
<!-- 当前用户输入信息 -->
<div v-if="username===item.username" class="x-x-x">
<div class="v-a-x1">{{item.text}}</div>
<div class="f-f">
<img class="t-x-x1" :src="item.avatar" alt="">
<div class="y-m-x">{{item.username}}</div>
</div>
</div>
<!-- 其他用户输入信息 -->
<div class="x-x-x" v-else>
<div>
<img class="t-x-x" :src="item.avatar" alt="">
<div class="y-m-x">{{item.username}}</div>
</div>
<div class="v-a-x">{{item.text}}</div>
</div>




</div>
</div>

<!-- 表情添加选项行 -->
<div class="t-p-b">
<img class="tu" src="../assets/xiaolian.png" alt="">
<img class="tu" src="../assets/jiandao.png" alt="">
<img class="tu" src="../assets/减 删除 文件-6.png" alt="">
</div>
<!-- 信息编辑区域 -->
<div>
<textarea class="text" v-model="text"></textarea>
</div>
<!-- 确定发送消息区域 -->
<div class="que-ding">按下Ctrl+Enter发送<button @click="sendMessage" class="fasong">发送</button></div>
</div>
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
         active:0,
         username:"",
         avatar:"",
         flag:false,
         act:0,
         count:1,
         arr:[],
         text:"",  
         xiaoxi:[],
       list:[
         {name: require('../../src/assets/avatar01.jpg')},
         {name: require('../../src/assets/avatar02.jpg')},
         {name: require('../../src/assets/avatar03.jpg')},
         {name: require('../../src/assets/avatar04.jpg')},
         {name: require('../../src/assets/avatar05.jpg')},
         {name: require('../../src/assets/avatar06.jpg')},
         {name: require('../../src/assets/avatar07.jpg')},
         {name: require('../../src/assets/avatar08.jpg')},
         {name: require('../../src/assets/avatar09.jpg')},
         {name: require('../../src/assets/avatar10.jpg')},
       ],
     

     }
   },
   methods: {
dianji(index,item){
  this.active=index
  this.avatar=item.name
  
},
// 登录
login(){
  if(this.username!==""&&this.avatar!==""){
this.$socket.emit('login',{
  username:this.username,
  avatar:this.avatar})
  }else{
    alert("信息请输入完整")
  }

  
},
// 发送消息
sendMessage(){
  this.$socket.emit('sendMessage',{
text:this.text,
username:this.username,
avatar:this.avatar
  })
}
   },

   sockets:{
loginSuccess(data){
 console.log("登陆成功",data)
 this.act=1

},
loginError(data){
  console.log("登录失败",data)
this.flag=true
},
  // 获取用户列表
userList(data){
  console.log("用户列表",data)
  this.arr=data
  this.count=data.length
},
// 用户下线
delUser(data){
  console.log("下线用户",data)

},
// 获取所有消息
receiveMessage(data){
  console.log("输入信息",data)  
  let xiao=this.xiaoxi
xiao.push(data)
  this.text=""
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
.box{
  width: 400px;
  height: 400px;
  background-color: white;
  margin: 100px auto;
  
}
.bt{
  width: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 70px;
}
.yhm{
  width: 300px;
  font-size: 16px;
 margin-top: 10px;
  margin-left: 50px;
}
.s-r-k{
  width: 300px;
  height: 30px;
  font-size: 16px;
 margin-left: 50px;
 margin-top: 10px;
}
.touxiang-box{
  width: 300px;
  margin-left: 50px;
  border: 1px solid rgba(0,0,0,0.3);
display: flex;
  height: 100px;
  margin-top: 10px;
  flex-wrap: wrap;
justify-content: space-around;
}
.dl{
  width: 300px;
  height: 30px;
  border-radius: 5px;
  background-color: green;
  margin-top: 10px;
  color: white;
  text-align: center;
  line-height: 30px;
  margin-left: 50px;
}
.t-x{
  width: 50px;
  height: 40px;
margin-left: 5px;
  margin-top: 5px;
}
.t-p{
  width: 50px;
  height: 40px;
}
.bor{
  border: 2px solid red;
}
.s-b{
  color: red;
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
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
 margin-top: 10px;
 margin-left: 60%;
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
.text{
  width: 98%;
  margin-top: 10px;
  height: 120px;
  background-color: #eeeeee;
border: 0;
margin-left: 1%;
resize: none;
}
.x-x-x{
  width: 100%;
  display: flex;
  
  margin: 10px;
}
.x-x-x1{
    width: 100%;
  display: flex;
 
  
}
.t-x-x{
  width: 30px;
  height: 30px;
}
.t-x-x1{
  width: 30px;
  height: 30px;
}
.y-m-x{
  font-size: 12px;
  color: red;
}

.v-a-x{
  font-size: 14px;
  margin-left: 10px;
  line-height: 40px;
}
.v-a-x1{
    font-size: 14px;
  line-height: 40px;
 
}
.f-f{
  margin-right: 20px;
}
</style>