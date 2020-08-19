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






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
