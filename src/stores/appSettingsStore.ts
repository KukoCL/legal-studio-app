import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { AppLanguages } from '@/infrastructure/types';

export const useAppSettingsStore = defineStore('appSettingsStore', () => {
  const settings = ref({
    appLanguage: 'es' as AppLanguages,
  });
  
  return {
    settings,
  };
});
