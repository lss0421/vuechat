<template>
 <div>
<div class="beijing">
<div class="box">
<div class="bt">用户登录</div>
<div class="yhm">用户名</div>
<input class="s-r-k" type="text" placeholder="请输入用户名">
<div class="yhm">选择头像</div>
<div class="touxiang-box">
<div v-for="(item,index) in list" :key="index"></div>
<img src="item" alt="">
</div>
<div class="dl">登录</div>

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
       ]

     }
   },
   methods: {

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
height: 670px;
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
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
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
</style>