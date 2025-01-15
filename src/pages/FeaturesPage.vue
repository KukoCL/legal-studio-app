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
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <p><strong>Nombre:</strong> {{ pokemon.name }}</p>
      <p><strong>Nro ° en la Pokedex:</strong> {{ pokemon.id }}</p>
      <h2>Datos extra</h2>
      <p><strong>Nombre:</strong> {{ pokemon.name }}</p>
      <li v-for="item in pokemon.types">
        {{ item.type.name }}
      </li>

      <button class="btn btn-primary" @click="moreInformation">Datos extra</button>
      <div v-if="generation">
        <p><strong>Nombre:</strong> {{ generation.main_region.name}}</p>
      </div>
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
      generation: null, // Informacion adicional de generacion a la que pertenece el pokemon
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
    async moreInformation()
    {
      try {
        // Llamado a la API con el nombre o número ingresado
        console.log(this.pokemon.past_types)
        const response = await fetch(
          `https://pokeapi.co/api/v2/generation/1`
        );

        if (!response.ok) {
          throw new Error(`No se encontró un informacion de "${this.pokemon.name}"`);
        }

        const data = await response.json();
        this.generation = data; // Guardar los datos del la generacion
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
  text-align: left;
}

.search-container {
  margin: 20px 0;
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
