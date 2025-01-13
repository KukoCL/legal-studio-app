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
      <p>{{ texts.runIsSet }} {{ runDigitsIsSet }}</p>
      <br />
      <label>{{ texts.setARun }}</label>
      <NumericInput
        :max-length="8"
        :value="user.runDigits.toString()"
        @input="handleRunInput"
      />
    </h3>
  </div>
</template>

<script setup lang="ts">
import type { HelloWorldProps } from '@/infrastructure/propsInterfaces';
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import { getAppTexts } from '@/helpers/langHelper';
import NumericInput from './CustomInputs/NumericInput.vue';
import { onMounted } from 'vue';

defineProps<HelloWorldProps>();
const userStore = useUserStore();
const { user, runDigitsIsSet } = storeToRefs(userStore);

onMounted(() => {
  user.value.name = 'Juanin';
});

const { helloWorld: texts } = getAppTexts();

const handleRunInput = (value: number) => {
  user.value.runDigits = Number(value);
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
