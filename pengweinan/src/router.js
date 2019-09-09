import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PDD from './views/PDD.vue'
import Search from './components/search/Search.vue'
import Chat from './components/chat/Chat.vue'
import MyPersonal from './components/my/MyPersonal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/mypersonal',
      name: 'mypersonal',
      component: MyPersonal
    },
    {
      path: '/',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/PDD.vue')
    }
  ]
})
