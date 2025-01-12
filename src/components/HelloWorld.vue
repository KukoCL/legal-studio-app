<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <h2 class="store-title">{{ texts.title }}</h2>
      <p>{{ texts.userName }} {{ user.name }}</p>
      <p>{{ texts.userRun }} {{ user.runDigits }}</p>
      <p>{{ texts.userName }} {{ runDigitsIsSet }}</p>
      <label>{{ texts.setARun }}</label>
      <input
        type="text"
        inputmode="numeric"
        @input="handleRunInput($event)"
        @keypress="handleKeyPress($event)"
      />
    </h3>
  </div>
</template>

<script setup lang="ts">
import type { HelloWorldProps } from '@/infrastructure/propsInterfaces';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { getAppTexts } from '@/helpers/langHelper';

defineProps<HelloWorldProps>();
const userStore = useUserStore();
// we should set 'es' into an env variable for the whole app
const { helloWorld: texts } = getAppTexts('es');

const { user, runDigitsIsSet } = storeToRefs(userStore);
const { setRunDigits } = userStore;

const handleRunInput = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  setRunDigits(Number(value));
};

const handleKeyPress = (event: KeyboardEvent) => {
  const key = event.key;
  if (!/^[0-9]$/.test(key)) {
    event.preventDefault();
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.store-title {
  margin-top: 20px;
}

input {
  margin-left: 10px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
