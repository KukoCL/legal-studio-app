import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';

import { mount } from '@vue/test-utils';
import HomePage from '../HomePage.vue';

describe('HomePage', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders properly', () => {
    const wrapper = mount(HomePage);
    expect(wrapper.find('.container').exists()).toBeTruthy();
  });
});
