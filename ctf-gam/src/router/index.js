// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import XSSChallenge from '../components/XSSChallenge.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
