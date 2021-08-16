import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    pokemons:[],
    pokemonA: undefined,
    abilityD: []
  },

  mutations: {
  
  
    loadPokemons(state, pokemons)
    {
      state.pokemons = pokemons;
    },

    pokemonSelect(state, pokemon)
    {
      state.pokemonA = pokemon;
    },

    getAbility(state, detail){
      state.abilityD.push(detail);
      return detail;
    }

  },
  actions: {

    async loadPokemons({ commit }){
      
     let pokemons = [];

      for (let i = 1; i < 152; i++) 
      {
        pokemons.push(
        await axios
        .get('https://pokeapi.co/api/v2/pokemon/' + i + '/')
        .then(response  => {
         
          const pokemon = {
            id: response.data.id,
            name:  response.data.name,
            photo: response.data.sprites.front_default,
            abilities: response.data.abilities
            
          };
          return pokemon;
        }))
      }
     
     commit('loadPokemons', pokemons);
       
    },

    async getAbility({commit}, url)
    {
       await axios
      .get(url)
      .then(response  => {
        commit('getAbility', {
          desc: response.data.effect_entries[0].effect,
          active: false
        });
      })
    },

    pokemonSelect({ commit }, pokemon)
    {
      commit('pokemonSelect', pokemon);
    },
    


   

    
         
         

  },
  modules: {  
  }
})

