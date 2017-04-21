import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Videos from '@/components/Videos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
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
