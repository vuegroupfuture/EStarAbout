import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
import { Navbar, TabItem } from 'mint-ui'
import { TabContainer, TabContainerItem } from 'mint-ui'
// import math from 'mathjs'


Vue.config.productionTip = false
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
// Vue.prototype.$math = math

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
