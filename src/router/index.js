import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/portalPage.vue') },
    { path: '/about', component: () => import('@/views/aboutUs.vue') },
    { path: '/product', component: () => import('@/views/productIntro.vue') },
    { path: '/apply', component: () => import('@/views/applyArea.vue') },
    { path: '/news', component: () => import('@/views/newsPage.vue') },
    { path: '/newsDetail', component: () => import('@/views/newsDetail.vue') },
    { path: '/join', component: () => import('@/views/joinUs.vue') },
    { path: '/contact', component: () => import('@/views/contactUs.vue') },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/notFound404.vue'),
    },
  ],
})

export default router
