<template>
  <div class="home" v-if="true">
   <div class="pokemons">
  
      <div 
        v-for="(pokemon, index) in this.pokemons" :key="index"
        class="pokemon"
        >
         <router-link to="/pokemon" >
            <div class="pokemon-image" :style="{backgroundImage: 'url(' + pokemon.photo + ')'}"  @click="pokemonSelect(pokemon)">  </div>
         </router-link> 
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  computed: mapState([
    'pokemons'
  ]),

  methods: {
    pokemonSelect(pokemon) {
      this.$store.dispatch('pokemonSelect', pokemon);
    },
  }
}
</script>

<style lang="scss">

  .home {

    .pokemons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .pokemon {
        flex: 0 0 30%;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 360px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

     
        
        .pokemon-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
     
        }
      }
    
  }


</style>
