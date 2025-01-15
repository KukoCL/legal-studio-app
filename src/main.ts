import './assets/main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './router/router';


// Create the router instance with createWebHashHistory
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
