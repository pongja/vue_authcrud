import { createRouter, createWebHistory } from 'vue-router';
import ToHome from '@/components/ToHome.vue';
import ToLogin from '@/components/ToLogin.vue';
import ToSignup from '@/components/ToSignup.vue';
import ToBoard from '@/components/ToBoard.vue';
import ToBoardCreate from '@/components/ToBoardCreate.vue';
import ToBoardDetail from '@/components/ToBoardDetail.vue';

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
    name: 'Boardlist',
    component: ToBoard,
  },
  {
    path: '/BoardCreate',
    name: 'BoardCreate',
    component: ToBoardCreate,
  },
  {
    path: '/BoardDetail/{id}',
    name: 'BoardDetail',
    component: ToBoardDetail,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
