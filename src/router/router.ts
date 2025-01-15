import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import FeaturesPage from '@/pages/FeaturesPage.vue';
import PokeapiPage from '@/pages/PokeapiPage.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/', // This redirects to the default route
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/features',
    component: FeaturesPage,
  },
  {
    path: '/pokeapi',
    component: PokeapiPage,
  },
  {
    path: '/:pathMatch(.*)*', // This is a catch-all route
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory('./'),
  routes,
});

export default router;
