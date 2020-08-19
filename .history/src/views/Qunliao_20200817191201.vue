<template>
 <div>

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
     loginSuccess(data){
 console.log("登陆成功",data)

},
loginError(data){
  console.log("登录失败",data)

},
     userList(data){
       console.log("用户信息",data)
     }
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

</style>