<template>
  <div class="greetings container mt-5">
    <h1 class="green display-4">{{ texts.headerTitle }}</h1>
    <h3 class="mt-3">
      <strong class="store-title">{{ texts.title }}</strong>
      <p class="mt-2">{{ texts.userName }} {{ user.name }}</p>
      <p>{{ texts.userRun }} {{ user.runDigits }}</p>
      <p>{{ texts.runIsSet }} {{ runDigitsIsSet }}</p>
      <br />
      <label class="form-label">{{ texts.setARun }}</label>
      <NumericInput
        :max-length="8"
        @input="handleRunInput"
      />
    </h3>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { storeToRefs } from 'pinia';
import useAppLang from '@/composables/settings/useAppLang';
import NumericInput from '@/components/CustomInputs/NumericInput.vue';
import { onMounted } from 'vue';

const userStore = useUserStore();
const { user, runDigitsIsSet } = storeToRefs(userStore);

onMounted(() => {
  user.value.name = 'Juanin';
});

const { getAppTexts } = useAppLang();
const { helloWorld: texts } = getAppTexts();

const handleRunInput = (value: number) => {
  user.value.runDigits = Number(value);
};
</script>

<style lang="scss" scoped>
</style>
