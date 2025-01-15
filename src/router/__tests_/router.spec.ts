import { describe, it, expect } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/router';

describe('Router', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  it('should have the correct routes', () => {
    expect(router.getRoutes().length).toBeGreaterThan(0);
  });

  it('should navigate to home route', async () => {
    await router.push('/');
    expect(router.currentRoute.value.path).toBe('/home');
  });

  it('should navigate to about route', async () => {
    await router.push('/features');
    expect(router.currentRoute.value.path).toBe('/features');
  });

  it('should navigate to a non-existent route and redirect to home', async () => {
    await router.push('/non-existent');
    expect(router.currentRoute.value.path).toBe('/home');
  });
});
