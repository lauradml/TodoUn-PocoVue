<template>
  <div>
    <h1>Contador = {{cantidad}}</h1>
    <button @click="aumetarAsync" >Aumetar</button>
    <button @click="reducirAsync" >Reducir</button>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(['cantidad']),
  },
   
      // mapState({
      //     cantidad: (state)=>state.cantidad,
      // }),
  methods: mapActions(['aumetarAsync','reducirAsync'])
  // methods: {
  //   aumentar() {
  //     this.$store.dispatch("aumetarAsync");
    
  //   },
  //   reducir() {
  //     this.$store.dispatch("reducirAsync");
  //   }
  // }
};
</script>