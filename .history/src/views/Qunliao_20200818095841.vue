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
// userList(data){
//   console.log(data)
// }


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
  font-size: 18px;
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
</style>