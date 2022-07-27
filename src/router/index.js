import { createRouter, createWebHistory } from 'vue-router';
import ToHome from '@/components/ToHome.vue';
import ToLogin from '@/components/ToLogin.vue';
import ToSignup from '@/components/ToSignup.vue';
import ToBoard from '@/components/ToBoard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ToHome,
  },
  {
    path: '/Login',
    name: 'Login',
    component: ToLogin,
  },
  {
    path: '/Signup',
    component: ToSignup,
  },
  {
    path: '/Board',
    component: ToBoard,
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
