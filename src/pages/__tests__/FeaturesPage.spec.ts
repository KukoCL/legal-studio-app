import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach } from 'vitest';

import { mount } from '@vue/test-utils';
import FeaturesPage from '../FeaturesPage.vue';

describe('FeaturesPage', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('renders properly', () => {
    const wrapper = mount(FeaturesPage);
    expect(wrapper.find('.container').exists()).toBeTruthy();
  });
});
