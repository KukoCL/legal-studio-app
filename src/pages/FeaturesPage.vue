<template>
  <div class="container">
    <h1>Buscar Pokémon</h1>
    
    <div class="search-container">
      
      <div class="input-group mb-3">
        <input type="text" v-model="query" 
        class="form-control" 
        placeholder="Ingresa el nombre o número del Pokémon" 
        aria-label="Ingresa el nombre o número del Pokémon" 
        aria-describedby="basic-addon2" >
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" 
          type="button"
          @click="searchPokemon">Buscar</button>
        </div>
      </div>
    </div>

    <div v-if="pokemon">
      <h2>Información del Pokémon</h2>
      <p><strong>Nombre:</strong> {{ pokemon.name }}</p>
      <p><strong>ID:</strong> {{ pokemon.id }}</p>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '', // Entrada del usuario
      pokemon: null, // Información del Pokémon
      error: '', // Mensaje de error si algo falla
    };
  },
  methods: {
    async searchPokemon() {
      if (!this.query.trim()) {
        this.error = 'Por favor, ingresa un nombre o número válido.';
        this.pokemon = null;
        return;
      }

      this.error = '';
      this.pokemon = null;

      try {
        // Llamado a la API con el nombre o número ingresado
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.query.toLowerCase()}`
        );

        if (!response.ok) {
          throw new Error(`No se encontró un Pokémon con "${this.query}"`);
        }

        const data = await response.json();
        this.pokemon = data; // Guardar los datos del Pokémon
      } catch (err) {
        this.error = err.message || 'Hubo un error al buscar el Pokémon.';
        console.error(err);
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.search-container {
  margin: 20px 0;
}

input {
  padding: 10px;
  font-size: 16px;
  width: calc(100% - 120px);
  max-width: 400px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
}

img {
  width: 150px;
  height: auto;
  margin-top: 20px;
}

.error {
  color: red;
  font-weight: bold;
  margin-top: 20px;
}
</style>
