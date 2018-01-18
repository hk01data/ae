import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-112679299-2',
  checkDuplicatedScript: true
})

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})
