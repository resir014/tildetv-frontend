import Vue from 'vue'
import Router from 'vue-router'
import VuePaginate from 'vue-paginate'
import FetchData from 'vue-fetch-data'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Videos from '@/components/Videos'

Vue.use(Router)
Vue.use(VuePaginate)
Vue.use(FetchData)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    },
    {
      path: '/videos-by-tag',
      name: 'Video Tag List',
      redirect: '/videos',
      children: [
        {
          path: ':tag',
          name: 'Videos By Tag',
          redirect: '/videos'
        }
      ]
    }
  ]
})
