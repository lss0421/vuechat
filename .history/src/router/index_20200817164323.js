import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'聊天室'
    }
  },

  {
    path: '/qunliao',
    name: 'Qunliao',
    component: ()=>import ('../views/Qunliao.vue'),
    meta:{
      title:'聊天室'
    }
  },

 ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
   
    document.title = to.meta.title
  
  next()
})

export default router
