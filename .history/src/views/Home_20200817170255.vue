<template>
 <div>
<div class="beijing">
<div class="box">
<div class="bt">用户登录</div>
<div class="yhm">用户名</div>
<input class="s-r-k" type="text" placeholder="请输入用户名">


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
  width: 100%;
  font-size: 16px;
  text-indent: 2em;
}
.s-r-k{
  width: 300px;
  height: 30px;
  font-size: 16px;
}
</style>