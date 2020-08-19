import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import { from } from 'core-js/fn/array'

Vue.use(new VueSocketIO({

    debug: true,

    connection: 'http://localhost:5005',  

}))



Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  if(to.meta,title){
    document.title = to.meta.title
  }
  next()
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
