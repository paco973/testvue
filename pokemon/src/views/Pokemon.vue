<template>
 <div>
   <div class="container">
     <div class="row">
       <div class="col-12">
         <h1>{{this.pokemonA.name}}</h1>
         <img :src="this.pokemonA.photo" :alt="this.pokemonA.name">

          <div v-for="(ability, index) in this.pokemonA.abilities" :key="index">
           
         
              <div class="col-6  justify-content-between">
                <h5>{{ability.ability.name}}</h5> 
              
                <button @click="this.getAbility(ability.ability.url)" v-if="!this.abilityD[index]">details</button>
              </div>
              <div v-if="this.abilityD[index]">
               {{this.abilityD[index].desc}}
              </div>
          <br>
          </div>
       </div>
       

     </div>
   </div>
  
  
</div>
</template>

<script>

import { mapState } from 'vuex'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
  data () {
    return {
    }
  },
  name: 'Pokemon',

  methods: {
    getAbility(url) {
      this.$store.dispatch('getAbility', url);
    },
  },
  computed: mapState([
    'pokemonA',
    'abilityD'
  ]),
}
</script>

<style lang="scss">



</style>
