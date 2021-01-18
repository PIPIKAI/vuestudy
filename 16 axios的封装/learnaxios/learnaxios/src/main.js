import Vue from 'vue'
import App from './App.vue'
import {request} from './network/request'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

