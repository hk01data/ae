import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: ['UA-112679299-2', 'UA-70981149-1'],
  checkDuplicatedScript: true,
  autoTracking: {
    pageviewOnLoad: true,
    page: true
  },
  ready () {
    // here Google Analaytics is ready to track!
    window.G.vm.$ga.page('/?ae')
  }
})

var vm = new Vue({
  el: '#app',
  render: h => h(App)
})
