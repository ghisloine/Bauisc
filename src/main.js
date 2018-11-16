import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AOS from 'aos'
import "aos/dist/aos.css"

import Home from './components/Home.vue'
import News from './components/News.vue'
import NotFound from './components/NotFound.vue'
import NewsDetail from './components/NewsDetail.vue'
import AboutUs from './components/AboutUs.vue'
import YonetimKurulu from './components/YonetimKurulu.vue'
import San from './components/San.vue'
import GoldenToy from './components/GoldenToy.vue'
import Bot from './components/Bot.vue'
import VizyonMisyon from './components/VizyonMisyon.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior() {
    return { x: 50, y: 0 };
  },
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
    },
    {
      path : '/yonetimkurulu',
      component : YonetimKurulu
    },
    {
      path : '/San3&4',
      component : San
    },
    {
      path : '/GoldenToy',
      component : GoldenToy
    },
    {
      path : '/Bot',
      component : Bot
    },
    {
      path : '/Vizyon&Misyon',
      component : VizyonMisyon
    },
    

  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  created(){
    AOS.init();
  }
})
