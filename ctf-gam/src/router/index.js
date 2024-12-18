// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import CTFHome from '../components/CTFHome.vue';
import XSSChallenge from '../components/XSSChallenge.vue';
import OSINTChallenge from '@/components/OSINTChallenge.vue';
import SQLChallenge from '@/components/SQLChallenge.vue';
import HashChallenge from '@/components/HashChallenge.vue';
import ClickjackingChallenge from '@/components/ClickjackingChallenge.vue';
import PhishingChallenge from '@/components/PhishingChallenge.vue';
import JWTChallenge from '@/components/JWTChallenge.vue';
import MITMChallenge from '@/components/MITMChallenge.vue';

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
  {
    path: '/hash-challenge',
    name: 'HashChallenge',
    component: HashChallenge,
  },
  {
    path: '/clickjacking-challenge',
    name: 'ClickjackingChallenge',
    component: ClickjackingChallenge,
  },
  {
    path: '/phi5hing-challenge',
    name: 'PhishingChallenge',
    component: PhishingChallenge,
  },
  {
    path: '/jwt-challenge',
    name: 'JWTChallenge',
    component: JWTChallenge,
  },
  {
    path: '/mitm-challenge',
    name: 'MITMChallenge',
    component: MITMChallenge,
  }



];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
