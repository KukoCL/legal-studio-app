import { mount, shallowMount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import NumericInput from '../NumericInput.vue';
import type { NumericInputProps } from '@/infrastructure/propsInterfaces';

const defaultProps: NumericInputProps = {
  maxLength: 50,
  value: '5',
};

describe('NumericInput.vue', () => {
  it('should render', () => {
    const wrapper = shallowMount(NumericInput, { props: defaultProps });
    expect(wrapper.exists()).toBe(true);
  });

  it('should render with correct initial value', () => {
    const initialValue = 5;
    const wrapper = mount(NumericInput, {
      props: defaultProps,
    });
    expect(wrapper.find('input').element.value).toBe(initialValue.toString());
  });

  it('should emit input value on input', async () => {
    const wrapper = shallowMount(NumericInput, { props: defaultProps });
    const input = wrapper.find('input');
    await input.setValue('10');
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual([10]);
  });

  it('should not allow non-numeric input', async () => {
    const wrapper = mount(NumericInput,  { props: { ...defaultProps, value: '' } });
    const input = wrapper.find('input');
    await input.trigger('keypress', { key: 'a' });
    expect(input.element.value).toBe('');
  });
});