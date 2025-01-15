import './assets/main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import FeaturesPage from './pages/FeaturesPage.vue';

// Define your routes
const routes: Array<RouteRecordRaw> = [
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
    path: '/:pathMatch(.*)*', // This is a catch-all route
    redirect: '/home',
  },
];

// Create the router instance with createWebHashHistory
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
