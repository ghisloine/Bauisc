import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import News from './components/News.vue'
import NotFound from './components/NotFound.vue'
import NewsDetail from './components/NewsDetail.vue'
import AboutUs from './components/AboutUs.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/hakkimizda',
      component : AboutUs
    },
    {
      path: '/News', component: News,
    },
    {
      path: "/News/:id",
      component: NewsDetail,
    },
    {
      path: '*',
      component: NotFound
    }

  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
