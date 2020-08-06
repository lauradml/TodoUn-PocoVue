<template>
  <div class="getters">
      <TareasRestantes></TareasRestantes>
      <ul>
          <li v-for="(tarea, index) in tareas" :key="index"> {{tarea.nombre}}</li>
      </ul>
  </div>
</template>

import TareasRe

<script>
import{mapState} from 'vuex'
import TareasRestantes from "@/components/TareasRestantes.vue";

export default {
  name: 'Getters',
    components: {
    TareasRestantes,
  },
  computed: mapState(['tareas'])

}
 
</script>