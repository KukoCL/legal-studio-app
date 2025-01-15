<template>
  <div class="container">
    <h1>Pokeapi</h1>
    <label >PokeID: </label>

    <input
      id="idPokemon"
      type="text"
      :value = "pokeID"
      placeholder="Enter your pokeID"
      @input = "updatePodeId($event)" />
    <button @click="getPokeInfo()"> Buscar
    </button>
    <p>{{ result }}</p>
  </div>
</template>

<script setup lang="ts">

import type { Pokemon } from '@/infrastructure/Pokeinterfaces';
import { ref } from 'vue';

const pokeID = ref(1);
const result = ref("nada");

const updatePodeId = (event: Event) => {
  const { value } = event.target as HTMLInputElement;
  pokeID.value = Number(value);


};

const getPokeInfo = async () => {


  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID.value}`);
  const parsedPoke = await response.json() as Pokemon;

  console.log(response);

  result.value = parsedPoke.name;
};

</script>

<style lang="scss" scoped>
</style>


