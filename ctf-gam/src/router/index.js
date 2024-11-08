// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import CTFHome from '../components/CTFHome.vue';
import XSSChallenge from '../components/XSSChallenge.vue';
import OSINTChallenge from '@/components/OSINTChallenge.vue';
import SQLChallenge from '@/components/SQLChallenge.vue';

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
  {
    path: '/osint-challenge',
    name: 'OSINTChallenge',
    component: OSINTChallenge,
  },
  {
    path: '/sql-challenge',
    name: 'SQLChallenge',
    component: SQLChallenge,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
