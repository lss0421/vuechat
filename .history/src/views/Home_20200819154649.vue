<template>
  <div>
    <!-- 登录界面 -->

    <div v-if="act===0">
      <div class="beijing">
        <div class="box">
          <div class="bt">用户登录</div>
          <div class="yhm">用户名</div>
          <input class="s-r-k" type="text" placeholder="请输入用户名" v-model="username" />
          <div class="yhm">选择头像</div>
          <div class="touxiang-box">
            <div v-for="(item,index) in list" :key="index" class="t-x">
              <img
                class="t-p"
                :src="item.name"
                alt
                :class="{'bor' : active === index}"
                @click="dianji(index,item)"
              />
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
              <img class="user-tu" :src="avatar" alt />
              <div class="user-name">{{username}}</div>
            </div>
            <div class="l-f-t">用户列表</div>
            <div v-for="(item,index) in arr" :key="index" class="user">
              <img class="user-tu1" :src="item.avatar" alt />
              <div class="user-name1">{{item.username}}</div>
            </div>
          </div>
          <div class="right-box">
            <div class="r-g">聊天室({{count}})</div>
            <!-- 聊天信息展示 -->

            <div class="l-t-b" id="scrolldIV">
           
              <div v-for="(item,index) in xiaoxi" :key="index">

              <div v-if="item.enter || item.leave"> 
              <!-- 上线 -->
               <div v-if="item.leave " class="l-l-l">{{item.leave}}退出群聊</div>
                <!-- 下线 -->
                <div v-if="item.enter " class="l-l-l">{{item.enter}}加入群聊</div>
              </div>
               
                <!-- 当前用户输入信息 -->
                <div v-else>
                <div v-if="username===item.username" class="x-x-x1">
                  <div class="f-f">
                    <img class="t-x-x" :src="item.avatar" alt />
                    <div class="y-m-x">{{item.username}}</div>
                  </div>
                  <img class="t-p" v-if="item.img" :src="item.img" alt="">
                  <div v-else class="v-a-x1">{{item.text}}</div>
                </div>
                <!-- 其他用户输入信息 -->
                <div class="x-x-x" v-else>
                  <div class="f-f1">
                    <img class="t-x-x" :src="item.avatar" alt />
                    <div class="y-m-x">{{item.username}}</div>
                  </div>
                  <img class="t-p1" v-if="item.img" :src="item.img" alt="">
                  <div v-else class="v-a-x">{{item.text}}</div>
                </div>
                </div>
              
               </div>
              </div>
         

            <!-- 表情添加选项行 -->
             <div v-if="boolean===true" class="biaoqing-box"><picker set="emojione" @select="select"/></div>
            <div class="t-p-b">
              <img class="tu" @click="biaoqing" src="../assets/xiaolian.png" alt />
              <img class="tu" src="../assets/jiandao.png" alt />
              <img class="tu" src="../assets/减 删除 文件-6.png" alt />
              <input class="inp" type="file" @change="change"/>
            </div>
            <!-- 信息编辑区域 -->
            <div>
              <textarea class="text" v-model="text"></textarea>
            </div>
            <!-- 确定发送消息区域 -->
            <div class="que-ding">
              按下Ctrl+Enter发送
              <button @click="sendMessage" @keydown="sendMessage" class="fasong">发送</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Picker } from 'emoji-mart-vue'
export default {
  name: "",
  props: {},
  components: {
    Picker
  },
  data() {
    return {
      active: 0,
      username: "",
      avatar: "",
      flag: false,
      act: 0,
      count: 1,
      arr: [],
      text: "",
      xiaoxi: [],
      boolean:false,
      list: [
        { name: require("../../src/assets/avatar01.jpg") },
        { name: require("../../src/assets/avatar02.jpg") },
        { name: require("../../src/assets/avatar03.jpg") },
        { name: require("../../src/assets/avatar04.jpg") },
        { name: require("../../src/assets/avatar05.jpg") },
        { name: require("../../src/assets/avatar06.jpg") },
        { name: require("../../src/assets/avatar07.jpg") },
        { name: require("../../src/assets/avatar08.jpg") },
        { name: require("../../src/assets/avatar09.jpg") },
        { name: require("../../src/assets/avatar10.jpg") }
      ]
    };
  },
  methods: {
    dianji(index, item) {
      this.active = index;
      this.avatar = item.name;
    },
    // 登录
    login() {
      if (this.username !== "" && this.avatar !== "") {
        this.$socket.emit("login", {
          username: this.username,
          avatar: this.avatar
        });
      } else {
        alert("信息请输入完整");
      }
    },
    // 发送消息
    sendMessage() {
      if(this.text===''){
        alert("请输入您的聊天内容")
      }else{
      this.$socket.emit("sendMessage", {
        text: this.text,
        username: this.username,
        avatar: this.avatar
      });
      }
    },
// 点击显示表情
biaoqing(){
  this.boolean=!this.boolean
},
// 发送表情
select(e){
  console.log(e)
this.text += e.native

},
// 点击选择图片
change(e){
let f=e.target.files[0]
let fr=new FileReader()
fr.readAsDataURL(f)
fr.onload = ()=>{
  this.$socket.emit("sendImage",{
    username:this.username,
    avatar:this.avatar,
    img:fr.result
  })
}
}
  },

  sockets: {
    loginSuccess(data) {
      console.log("登陆成功", data);
      this.act = 1;
    },
    loginError(data) {
      console.log("登录失败", data);
      this.flag = true;
    },
    // 获取用户列表
    userList(data) {
      console.log("用户列表", data);
      let obj={}
      if(data.length>this.arr.length){
       obj.enter=data[data.length-1].username
      this.xiaoxi.push(obj)
      this.arr = data; 
      this.count = data.length;
      }
    },
    // 用户下线
    delUser(data) {
      console.log("下线用户", data);
      let obj={}
        obj.leave = data.username;
      this.xiaoxi.push(obj);
    },
    // 获取所有消息
    receiveMessage(data) {
      console.log("输入信息", data);
      
    let arr = this.xiaoxi
    arr.push(data)
      this.text = "";
      console.log(this.xiaoxi)
    },
    // 获取图片信息
    receiveImage(data){
console.log(data)
let arr=this.xiaoxi
arr.push(data)
    }
  },
  mounted() {},
  watch: {
    xiaoxi() {
      let obj = document.getElementById("scrolldIV");
      this.$nextTick(() => {
        obj.scrollTop = obj.scrollHeight;
      });
    },
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.beijing {
  width: 100%;
  height: 720px;
  background-image: url("../../src/assets/bg.jpg");
  display: flex;
}
.box {
  width: 400px;
  height: 400px;
  background-color: white;
  margin: 100px auto;
}
.bt {
  width: 100%;
  text-align: center;
  font-size: 28px;
  line-height: 70px;
}
.yhm {
  width: 300px;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 50px;
}
.s-r-k {
  width: 300px;
  height: 30px;
  font-size: 16px;
  margin-left: 50px;
  margin-top: 10px;
}
.touxiang-box {
  width: 300px;
  margin-left: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.dl {
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
.t-x {
  width: 50px;
  height: 40px;
  margin-left: 5px;
  margin-top: 5px;
}
.t-p {
  width: 50px;
  height: 40px;
}
.bor {
  border: 2px solid red;
}
.s-b {
  color: red;
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.beijing {
  width: 100%;
  height: 720px;
  background-image: url("../../src/assets/bg.jpg");
  display: flex;
}
.big-box {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
}
.left-box {
  width: 30%;
  height: 100%;
  background-color: #2e3238;
}
.right-box {
  width: 70%;
  height: 100%;
  background-color: #eeeeee;
  position: relative;
}
.l-f {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid black;
  display: flex;
}
.l-f-t {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
  color: white;
  line-height: 60px;
  font-size: 16px;
  text-indent: 1em;
}
.user {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid black;
  color: white;
  line-height: 60px;
  font-size: 16px;
  text-indent: 1em;
  display: flex;
}
.r-g {
  width: 96%;
  height: 60px;
  border-bottom: 1px solid black;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  margin: 0 auto;
}
.l-t-b {
  width: 100%;
  height: 60%;
  border-bottom: 1px solid black;
  overflow-y: auto;
}
.t-p-b {
  width: 100%;
  display: flex;
  position: relative;
}
.tu {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-top: 10px;
}
.que-ding {
  color: #cccccc;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 60%;
}
.fasong {
  width: 80px;
  text-align: center;
  background-color: white;
  line-height: 30px;
  margin-left: 10px;
}
.user-tu {
  width: 40px;
  height: 40px;
  margin-top: 20px;
  margin-left: 20px;
}
.user-tu1 {
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 20px;
}
.user-name {
  color: white;
  line-height: 80px;
  font-size: 16px;
  text-indent: 10px;
}
.user-name1 {
  color: white;
  line-height: 60px;
  font-size: 16px;
  text-indent: 10px;
}
.text {
  width: 98%;
  margin-top: 10px;
  height: 120px;
  background-color: #eeeeee;
  border: 0;
  margin-left: 1%;
  resize: none;
}
.x-x-x {
  width: 100%;
  display: flex;

  
}
.x-x-x1 {
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
}
.t-x-x {
  width: 30px;
  height: 30px;
}

.y-m-x {
  font-size: 12px;
  color: red;
}

.v-a-x {
  font-size: 14px;
  margin-left: 10px;
  height: 40px;
  line-height: 40px;
  background-color: red;
  color: white;
  border-radius: 10px;
   padding: 0 10px 0 10px;
}
.v-a-x1 {
  font-size: 14px;
  line-height: 40px;
  float: right;
  margin-right: 10px;
   background-color: blue;
  color: white;
  padding: 0 10px 0 10px;
  border-radius: 10px;
}
.f-f {
  margin-right: 10px;
  float: right;
}
.f-f1{
  margin-left: 10px;
}
.l-l-l{
  width: 100%;
  text-align: center;
  line-height: 30px;
  color: red;
  font-size: 12px;
}
.biaoqing-box{
  position: fixed;
  top: 72px;
  
}
.t-p{
  float: right;
  margin-right: 10px;
  width: 100px;
  height: 100px;
}
.t-p1{
  margin-left: 10px;
 width: 100px;
 height: 100px;
}

.inp{
  width: 20px;
  height: 20px;
  position: absolute;
  border: 1px solid red;
  top: 10px;
  left: 85px;
  opacity: 0;
}
.inp:hover {
  cursor: pointer;
}
.tu:hover {
  cursor: pointer;
}
</style>