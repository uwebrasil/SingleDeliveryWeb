import Vue from 'vue'
import App from './App.vue'

import Home from '@/components/Home'
import LogMeIn from '@/components/LogMeIn'
import MainPage from '@/components/MainPage'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)



Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },    
    {
      path: '/logmein',
      name: 'LogMeIn',
      component: LogMeIn
    },
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage
    },
  ]
})

new Vue({  
  router,
  render: h => h(App),
}).$mount('#app')