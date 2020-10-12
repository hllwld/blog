import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.config.errorHandler = function(err) {
  console.error(err)
}
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
