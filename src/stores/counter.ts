import { defineStore } from 'pinia'
import type { User } from '@/infrastructure/interfaces';

export const useUserStore = defineStore('user', () => {
  const user: User = {
    id: '',
    name: '',
    runDigits: 0
  };

  return { user }
})
