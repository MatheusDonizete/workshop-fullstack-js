import { createRouter, createWebHashHistory  } from 'vue-router';

const routerHashHistory = createWebHashHistory ();

const router = createRouter({
  history: routerHashHistory,
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "group-foo" */ '@/components/HelloWorld.vue')
    },
  ]
});

export default router;
