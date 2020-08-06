<template>
    <h1>{{tareasCompletadas}} tareas completadas</h1>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    // computed:{
    //     tareasCompletadas(){
    //     //    return  this.$store.state.tareas.filter((tareas) =>{
    //     //         return tareas.completado;
    //     //     }).length;
    //     return this.$store.getters.tareasCompletadas;
    //     }
    // }

computed: mapGetters(['tareasCompletadas'])

};
</script>