import { createRouter, createWebHashHistory  } from 'vue-router';

const routerHashHistory = createWebHashHistory ();

const router = createRouter({
  history: routerHashHistory,
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "hello-world" */ '@/components/HelloWorld.vue'),
    },
    {
      path: '/about',
      component: () => import(/* webpackChunkName: "hello-world" */ '@/pages/About.vue'),
    },
    {
      path: '/signature/list',
      component: () => import(/* webpackChunkName: "signature" */ '@/pages/Signature/List.vue'),
    },
    {
      path: '/signature/register',
      component: () => import(/* webpackChunkName: "signature" */ '@/pages/Signature/Register.vue'),
    },
  ],
});

export default router;
