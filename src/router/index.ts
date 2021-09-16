import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
  },
  {
    path:"/:catchAll(.*)",
    redirect:'/404'
  },
  {
    path:'/404',
    name:'notFound',
    component: () => import('../views/NotFound')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
