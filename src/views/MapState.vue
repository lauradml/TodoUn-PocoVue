<template>
  <div class="vuex">
      <h2>Hola me llamo {{nombre}} {{apellidos}} y soy {{profesion}}</h2>

    
  </div>
</template>

<script>
import {mapState} from 'vuex';
// import TypeProps from "@/components/TypeProps.vue";

export default {
  name: 'Vuex',
  components: {
    
  },
  data(){
    return{
      
    }
  },

  computed:
    //   mapState({
    //       nombre: (state)=>state.nombre,
    //       apellidos: (state) =>state.apellidos
    //   }),

// aquí directamene esamos pasando el state como una matriz de string
    mapState(['nombre','apellidos', 'profesion']),

  methods:{

    }
}
</script>