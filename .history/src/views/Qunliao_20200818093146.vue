<template>
 <div>
<div class="beijing">
<div class="big-box">
<div class="left-box"></div>
<div class="right-box"></div>
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
   sockets:{
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
height: 100%;
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
  background-color: black;
}
.right-box{
  width: 70%;
  height: 100%;
 background-color: white;
}
</style>