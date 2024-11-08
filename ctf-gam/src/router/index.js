// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import CTFHome from '../components/CTFHome.vue';
import XSSChallenge from '../components/XSSChallenge.vue';

const routes = [
  {
    path: '/',
    name: 'CTFHome',
    component: CTFHome,
  },
  {
    path: '/xss-challenge',
    name: 'XSSChallenge',
    component: XSSChallenge,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
