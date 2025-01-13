<template>
  <div class="container">
    <input
      type="text"
      inputmode="numeric"
      :value="props.value"
      :maxlength="props.maxLength"
      @input="handleRunInput"
      @keypress="handleKeyPress"
    />
  </div>
</template>

<script setup lang="ts">
import type { NumericInputEmit } from '@/infrastructure/emits';
import type { NumericInputProps } from '@/infrastructure/propsInterfaces';

const props = defineProps<NumericInputProps>();
const emit = defineEmits<NumericInputEmit>();

const handleRunInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  emit('input', Number(value));
};

const handleKeyPress = (event: KeyboardEvent) => {
  const key = event.key;
  if (!/^[0-9]$/.test(key)) {
    event.preventDefault();
  }
};
</script>