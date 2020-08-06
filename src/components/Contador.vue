<template>
  <div>
    <h1>Contador = {{ cantidad }}</h1>
    <button @click="aumentar" >Aumetar</button>
    <button @click="reducir" >Reducir</button>
  </div>
</template>
<script>
import { mapState, mapMutations} from "vuex";
export default {
  computed:
   mapState(['cantidad']),
    //  mapState({
    //       cantidad: (state)=>state.cantidad,
    //   }),
  methods: mapMutations(['aumentar', 'reducir']),
//   methods: {
//     aumentar() {
//       this.$store.commit("aumentar");
    
//     },
//     reducir() {
//       this.$store.commit("reducir");
//     }
//   }
};
</script>