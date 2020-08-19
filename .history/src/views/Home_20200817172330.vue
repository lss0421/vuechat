<template>
 <div>
<div class="beijing">
<div class="box">
<div class="bt">用户登录</div>
<div class="yhm">用户名</div>
<input class="s-r-k" type="text" placeholder="请输入用户名">
<div class="yhm">选择头像</div>
<div class="touxiang-box">


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
         avatar01.jpg,
         avatar02.jpg,
         avatar03.jpg,
         avatar04.jpg,
         avatar05.jpg,
         avatar06.jpg,
         avatar07.jpg,
         avatar08.jpg,
         avatar09.jpg,
         avatar10.jpg,
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