import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/index/index.vue')
    },
    {
      path: '/three-js',
      name: 'ThreeJs',
      component: () => import('@/views/gadget/threeJs/index.vue'),
      children: [
        {
          path: '/three-js/rain',
          name: 'ThreeJsRain',
          component: () => import('@/views/gadget/threeJs/rain/rain.vue')
        }
        // {
        //   path: 'earth',
        //   name: 'earth',
        //   component: () => import('@/views/gadget/threeJs/earth.vue')
        // }
      ]
    }
  ]
})

export default router
