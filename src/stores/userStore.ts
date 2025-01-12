import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/infrastructure/interfaces';

export const useUserStore = defineStore('userStore', () => {
  const user = ref({
    id: '',
    name: '',
    runDigits: 0
  } as User);

  const setRunDigits = (newDigits: number) => {
    user.value.runDigits = newDigits;
  };

  const runDigitsIsSet = computed(() => user.value.runDigits);

  return {
    user,
    setRunDigits,
    runDigitsIsSet
  };
});
